"use client";

/**
 * @class Contact
 * @description purpose of this component is to render the contact page
 * @author Nawod Madhuvantha
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ContactFormData } from "@/shared/models/contact";
import { NotifyType, SocialLinks } from "@/shared/constants/common";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();
    const [isLoading, setIsLoading] = useState(false);

    /**
     * display a notification
     * @param type
     * @param msg
     */
    const notify = (type: number, msg: string) => {
        if (type === NotifyType.ERROR) {
            toast.error(msg);
        } else {
            toast.success(msg);
        }
    };

    /**
     * sent an email
     */
    const sentEmail = (data: ContactFormData) => {
        setIsLoading(true);

        const templateParams = {
            from_name: data.name,
            number: data.number,
            message: data.message,
            reply_to: data.email,
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAIL_KEY
            )
            .then(() => {
                setIsLoading(false);
                notify(NotifyType.SUCCESS, "Your message successfully sent!");
                reset();
            })
            .catch(() => {
                setIsLoading(false);
                notify(NotifyType.ERROR, "Sorry! Your message didn't sent");
            });
    };

    /**
     * handle form submit
     * @param data
     */
    const onSubmit = (data: ContactFormData) => {
        sentEmail(data);
    };

    return (
        <div className="w-full">
            <form
                className=""
                id="my-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="text"
                    placeholder="YOUR NAME"
                    {...register("name", { required: true })}
                    className={`input-box glass-block ${
                        errors.name && "outline-red-600 border-red-600"
                    }`}
                />
                <input
                    type="email"
                    {...register("email", { required: true })}
                    className={`input-box glass-block ${
                        errors.email && "outline-red-600 border-red-600"
                    }`}
                    placeholder="YOUR E-MAIL"
                />
                <input
                    type="number"
                    {...register("number", { required: true })}
                    className={`input-box glass-block ${
                        errors.number && "outline-red-600 border-red-600"
                    }`}
                    placeholder="CONTACT NUMBER"
                />
                <textarea
                    {...register("message", { required: true })}
                    className={`textarea glass-block ${
                        errors.message && "outline-red-600 border-red-600"
                    }`}
                    placeholder="YOUR MESSAGE"
                />
            </form>
            <div className="flex justify-between mt-4 items-center">
                <div className="flex items-center gap-2">
                    {SocialLinks.list.map((item) => (
                        <Link
                            href={item.value}
                            key={item.id}
                            target="_blank"
                            rel="noreferrer"
                            title={item.id}
                        >
                            <item.icon className="text-2xl hover:text-themeLight cursor-pointer transition-all duration-500" />
                        </Link>
                    ))}
                </div>
                <button
                    form="my-form"
                    className={`send-btn bg-theme-metallic px-8 py-2 roboto uppercase text-shine rounded-md disabled:opacity-70 ${
                        isLoading && "pointer-events-none"
                    }`}
                    disabled={isLoading}
                    type="submit"
                >
                    Send
                </button>
            </div>
            <ToastContainer
                theme="dark"
                closeOnClick={false}
                pauseOnFocusLoss={false}
                position="bottom-right"
            />
        </div>
    );
};

export default ContactForm;
