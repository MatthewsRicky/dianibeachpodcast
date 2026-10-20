import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name must be 100 characters or fewer."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),

  enquiryType: z.enum([
    "general",
    "advertising",
    "business-directory",
    "podcast",
    "events",
    "partnership",
    "other",
  ]),

  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(150, "Subject must be 150 characters or fewer."),

  message: z
    .string()
    .trim()
    .min(10, "Please provide a little more detail.")
    .max(5000, "Message must be 5,000 characters or fewer."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactActionState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormValues, string[]>>;
};

export const initialContactState: ContactActionState = {
  success: false,
  message: "",
};
