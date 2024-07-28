import { ClerkProvider } from "@clerk/nextjs";

const platformChildren = ({
    children
} : {
  children: React.ReactNode;
}) => {
   return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
   );
};

export default platformChildren ;