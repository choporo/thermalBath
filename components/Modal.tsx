"use client";

import { ReactNode, useEffect } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "./ui/dialog";
import { useRouter } from "next/navigation";
import { DialogDescription } from "@radix-ui/react-dialog";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  useEffect(() => {});

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}

// "use client";
// import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
// import { useRouter } from "next/navigation";

// export function Modal({ children }: { children: React.ReactNode }) {
//   const overlay = useRef(null);
//   const wrapper = useRef(null);
//   const router = useRouter();

//   const onDismiss = useCallback(() => {
//     router.back();
//   }, [router]);

//   const onClick: MouseEventHandler = useCallback(
//     (e) => {
//       if (e.target === overlay.current || e.target === wrapper.current) {
//         if (onDismiss) onDismiss();
//       }
//     },
//     [onDismiss, overlay, wrapper]
//   );

//   const onKeyDown = useCallback(
//     (e: KeyboardEvent) => {
//       if (e.key === "Escape") onDismiss();
//     },
//     [onDismiss]
//   );

//   useEffect(() => {
//     document.addEventListener("keydown", onKeyDown);
//     return () => document.removeEventListener("keydown", onKeyDown);
//   }, [onKeyDown]);

//   return (
//     <div
//       ref={overlay}
//       className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10 border-2"
//       onClick={onClick}
//     >
//       <div
//         ref={wrapper}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6 border-2 rounded-md"
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

export default Modal;
