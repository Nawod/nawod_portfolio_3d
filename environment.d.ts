import Next from "next";

  declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_EMAIL_SERVICE_ID : string;
        NEXT_PUBLIC_EMAIL_TEMPLATE_ID :  string;
        NEXT_PUBLIC_EMAIL_KEY : string;
      }
    }
  }