import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Choices = { analytics: boolean; maps: boolean };
type SavedChoices = Choices & { version: 1; expires: number };
const KEY = "lillobrillo-consent-v1";
const ANALYTICS_ID = "G-189CPHXTR0";
const DENIED: Choices = { analytics: false, maps: false };
// Give consent choices equal visual weight, including when revisiting preferences.
const consentButtonClass = "min-h-12 w-full rounded-full border border-stone-400 bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900";
const ConsentContext = createContext<{
  choices: Choices;
  openPreferences: () => void;
} | null>(null);

function readChoices(): SavedChoices | null {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || "null");
    return value?.version === 1 && Number.isFinite(value.expires) && value.expires > Date.now()
      && typeof value.analytics === "boolean" && typeof value.maps === "boolean" ? value : null;
  } catch { return null; }
}

function clearAnalyticsCookies() {
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) continue;
    const domains = ["", location.hostname, `.${location.hostname}`, ".lillobrillo.it"];
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ""} SameSite=Lax`;
    }
  }
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("ConsentProvider missing");
  return context;
}

export default function ConsentProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState(readChoices);
  const [open, setOpen] = useState(() => saved === null);
  const [draft, setDraft] = useState<Choices>(saved ?? DENIED);
  const bannerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const choices = saved ?? DENIED;

  useEffect(() => {
    if (open) bannerRef.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!choices.analytics) {
      clearAnalyticsCookies();
      return;
    }
    if (document.getElementById("google-analytics")) return;
    const analyticsWindow = window as Window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.gtag = function () { analyticsWindow.dataLayer!.push(arguments); };
    analyticsWindow.gtag("consent", "default", {
      analytics_storage: "granted", ad_storage: "denied",
      ad_user_data: "denied", ad_personalization: "denied",
    });
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", ANALYTICS_ID, {
      allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_expires: 60 * 60 * 24 * 180, cookie_update: false,
    });
    const script = document.createElement("script");
    script.id = "google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
    document.head.appendChild(script);
  }, [choices.analytics]);

  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === KEY || event.key === null) location.reload();
    };
    window.addEventListener("storage", sync);
    const timer = saved ? window.setInterval(() => {
      if (saved.expires <= Date.now()) location.reload();
    }, 60_000) : undefined;
    return () => { window.removeEventListener("storage", sync); window.clearInterval(timer); };
  }, [saved]);

  function save(next: Choices) {
    const record: SavedChoices = { ...next, version: 1, expires: Date.now() + 180 * 24 * 60 * 60 * 1000 };
    try { localStorage.setItem(KEY, JSON.stringify(record)); } catch { /* Apply for this visit even if storage is disabled. */ }
    if (choices.analytics && !next.analytics) {
      (window as unknown as Record<string, unknown>)[`ga-disable-${ANALYTICS_ID}`] = true;
      clearAnalyticsCookies();
      location.reload();
      return;
    }
    setSaved(record);
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <ConsentContext.Provider value={{ choices, openPreferences: () => {
      triggerRef.current = document.activeElement as HTMLElement | null;
      setDraft(choices); setOpen(true);
    } }}>
      {children}
      {open && (
        <section ref={bannerRef} tabIndex={-1} aria-labelledby="privacy-title" className="fixed inset-x-0 bottom-0 z-[1000] max-h-[85svh] overflow-y-auto border-t border-stone-200 bg-white p-5 text-stone-900 shadow-xl sm:p-6">
          <div className="mx-auto max-w-5xl">
            <h2 id="privacy-title" className="text-lg font-bold">La tua privacy</h2>
            <p className="mt-2 text-sm leading-6">Con il tuo consenso usiamo Google Analytics per le statistiche e Google Maps per la mappa. Puoi rifiutare e continuare a navigare, oppure scegliere i singoli servizi. La scelta viene ricordata per 180 giorni e puoi cambiarla dal footer. <a href="/privacy.html" className="underline">Privacy e cookie</a>.</p>
            <div className="my-4 flex flex-wrap gap-6">
              <label className="flex items-center gap-2"><input type="checkbox" checked={draft.analytics} onChange={(e) => setDraft({ ...draft, analytics: e.target.checked })} /> Statistiche Google Analytics</label>
              <label className="flex items-center gap-2"><input type="checkbox" checked={draft.maps} onChange={(e) => setDraft({ ...draft, maps: e.target.checked })} /> Mappa Google Maps</label>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button type="button" className={consentButtonClass} onClick={() => save(DENIED)}>Rifiuta tutti</button>
              <button type="button" className={consentButtonClass} onClick={() => save(draft)}>Salva preferenze</button>
              <button type="button" className={consentButtonClass} onClick={() => save({ analytics: true, maps: true })}>Accetta tutti</button>
            </div>
          </div>
        </section>
      )}
    </ConsentContext.Provider>
  );
}
