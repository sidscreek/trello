"use client";
//this interface is used to define the properties of sidebar 
import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts" ;
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItem, organization} from "./NavItem";
import { Organization } from "@clerk/nextjs/server";
interface SidebarProps{
    storageKey?: string;

}

const Sidebar = ({
    storageKey = "t-sidebar-state",
} : SidebarProps) => {
    //create a state to keep track of which accordion is expanded and which is not 
    const [expanded, setExpanded] = useLocalStorage<Record<string,any>>(storageKey, {});

    const {
     organization: activeOrganization,
     isLoaded: isLoadedOrg
     } = useOrganization();

     const {
        userMemberships,
        isLoaded : isLoadedOrgList
     } = useOrganizationList({
            userMemberships : {
                infinite: true,
            },
     });

     const defaultAccordionValue: string[] = Object.keys(expanded).reduce((acc: string[], key: string) => {
        if(expanded[key]){
            acc.push(key);
        }
        return acc;
     }, []);

     //will extract values from the keys and append it in array { 123 : "true" } => [123]

     const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr, //copies all the properties of curr operator 
            [id] : !expanded[id],
        }));
     };

     //create a loading state 
     if(!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading)
     {
        //return a skeleton 
        return (
            <>
                <Skeleton />
            </>
        )
     }
  return (
   <>
   <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">
            Workspaces
        </span>
        <Button
            asChild
            type="button"
            size="icon"
            variant="ghost"
            className="ml-auto">
            <Link href="/select-org">
                <Plus 
                    className="h-4 w-4"/>
            </Link>
        </Button>
   </div>
   <Accordion
    type="multiple"
    defaultValue={defaultAccordionValue}
    className="space-y-2"
    >
    
    { userMemberships.data.map(({ organization }) => (
        // <p key={organization.id}>
        //     { organization.id }
        // </p>
        <NavItem 
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as organization}
            onExpand = {onExpand}
        />
    ))}
   </Accordion>
   </>
  )
}

export default Sidebar
