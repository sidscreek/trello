"use client";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose
  } from "@/components/ui/popover"
//   import { board } from "@prisma/client";
  import { useAction } from "@/hooks/use-action";
  import { CreateBoard } from "@/actions/create-board/schema";
  import { ElementRef, useRef } from "react";
  import { toast } from "sonner";
  import { FormInput } from "./form-input";
  import { FormSubmit } from "./form-submit";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { createBoard } from "@/actions/create-board";
import { FormPicker } from "./form-picker";
import { useRouter } from "next/navigation";

  interface FormPopoverProps {
    children: React.ReactNode;
    side?: "left" | "right" | "bottom" | "top";
    align?: "start" | "center" | "end";
    sideOffset?: number;
  };

  export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset=0,
  }: FormPopoverProps) => {
    const router = useRouter();

    const closeRef = useRef<ElementRef<"button">>(null);
    const { execute, fieldErrors } = useAction(createBoard , {
        onSuccess: (data) => {
            // console.log({data});
            toast.success("Board created");
            closeRef.current?.click();
            console.log("Navigating to:", `/board/${data.id}`);
            router.push(`/board/${data.id}`);

            // router.push(`/board/${data.id}`);
        },

        onError: (error) => {
            // console.log({ error });
            toast.error(error);
        }
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        const image = formData.get("image") as string;

        // console.log({ image });

        execute({ title , image});
    }
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
             side={side}
             align={align}
             className="w-80 pt-3"
             sideOffset={sideOffset}
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Create Board
                </div>
                <PopoverClose ref={closeRef} asChild>
                    <Button
                        className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
                        variant="ghost">
                        <X className="h-4 w-4"/>
                    </Button>
                </PopoverClose>
                <form action={onSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <FormPicker
                            id="image"
                            errors={fieldErrors}
                         />
                        <FormInput 
                            id="title"
                            label="Board Title"
                            type="text"
                            errors={fieldErrors}
                        />
                    </div>
                    <FormSubmit className="w-full">
                        Create 
                    </FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    );
};