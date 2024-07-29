"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
// note: in next js even if we mark something as "use client" it doesnt necessary mean that it is not a server rendered
// the "use client" component is also server rendered component 
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    
    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);

    },[]); // will be rendered at client only 

    useEffect(() => {
        onClose();
    },[pathname, onClose]); //will be called everytime the pathname changes (whenever the url changes the mobile sidebar will close)
    //using this we dont have to manually call the onClose() method whenever our url changes 
    if(!isMounted){
        return null;
    }
  return (
   <>
        <Button 
            onClick={onOpen}
            className="block md:hidden m"
            variant="ghost"
            size="sm"
        >
            <Menu className="h-4 w-4 "/>
        </Button>

        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                side="left"
                className="p-2 pt-10">
                <Sidebar storageKey="t-sidebar-mobile-state"/>
            </SheetContent>
        </Sheet>
   </>
  )
}

export default MobileSidebar
