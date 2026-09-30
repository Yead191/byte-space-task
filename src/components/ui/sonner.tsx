"use client";

import { Toaster as SonnerToaster } from "sonner";
import { Check, AlertCircle, Info, Loader2 } from "lucide-react";

type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

export function Toaster({ ...props }: ToasterProps) {
  return (
    <SonnerToaster
      position="top-right"
      expand={true}
      richColors={false}
      closeButton
      duration={4000}
      icons={{
        success: (
          <div className="w-8 h-8 rounded-full bg-brand-blue text-brand-lime flex items-center justify-center shrink-0 shadow-sm">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        ),
        error: (
          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 border border-rose-200/80 flex items-center justify-center shrink-0 shadow-sm">
            <AlertCircle className="w-4 h-4 stroke-[2.5]" />
          </div>
        ),
        info: (
          <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue border border-blue-200/80 flex items-center justify-center shrink-0 shadow-sm">
            <Info className="w-4 h-4 stroke-[2.5]" />
          </div>
        ),
        loading: (
          <div className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
            <Loader2 className="w-4 h-4 animate-spin stroke-[2.5]" />
          </div>
        ),
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "w-full max-w-[370px] flex items-start gap-3.5 p-4 rounded-2xl bg-white/98 text-slate-900 border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,59,226,0.14),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-6px_rgba(0,59,226,0.2)] transition-all",
          title:
            "font-heading font-semibold text-[13.5px] text-slate-950 tracking-tight leading-snug",
          description:
            "text-[12px] text-slate-500 font-normal leading-relaxed mt-0.5",
          actionButton:
            "bg-brand-blue text-white font-medium hover:bg-brand-blue/90 active:scale-95 text-xs rounded-full px-3.5 py-1.5 transition-all shadow-xs cursor-pointer",
          cancelButton:
            "bg-slate-100 text-slate-600 hover:bg-slate-200 active:scale-95 text-xs rounded-full px-3 py-1.5 transition-all cursor-pointer",
          closeButton:
            "!bg-slate-100 hover:!bg-slate-200 !text-slate-400 hover:!text-slate-700 !border-slate-200/60 transition-all !top-3 !right-3 rounded-full p-1",
          success: "!border-slate-200/90",
          error: "!border-rose-200",
          info: "!border-blue-200",
          warning: "!border-amber-200",
        },
      }}
      {...props}
    />
  );
}

export { toast } from "sonner";
