import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const platformChildren = ({
    children
} : {
  children: React.ReactNode;
}) => {
   return (
    <ClerkProvider>
    <Toaster />
        {children}
    </ClerkProvider>
   );
};

export default platformChildren ;