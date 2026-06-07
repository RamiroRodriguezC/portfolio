export default function DownloadButton({btnText, href, download}) {
  return (
    <a 
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 text-xs font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 shadow-[0_12px_25px_rgba(0,0,0,0.5)] border border-white/10 hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
    >
        <span>{btnText}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
    </a>
  );
}








