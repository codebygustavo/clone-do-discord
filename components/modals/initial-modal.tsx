"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const formSchema = z.object({
    name: z.string().min(1,{
        message: "Nome do servidor é necessário."
    }),
    imageUrl: z.string().min(1,{
        message: "Imagem do servidor é necessária."
    }),
})

export const InitialModal = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: "",
        }
    })

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    if(!isMounted) {
        return null;
    }

    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0" overflow-hidden>
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center">Customize seu servidor.</DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">Personalize seu servidor com nome e imagem. Você pode mudar isso quando quiser.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-8 px-6">
                            <div className="flex items-center justify-center text-center">
                                para fazer: envio de imagem
                            </div>
                            <FormField 
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-segundaty/70">
                                            Nome do servidor
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                disabled={ isLoading }
                                                className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black fucus-visible:ring-ofset-0"
                                                placeholder="Digite o nome do servidor."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="bg-gray-100 px-6 py-4">
                            <Button variant="primary" disabled={isLoading} className="">
                                Criar
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}