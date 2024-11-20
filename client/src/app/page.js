"use client";
import Form from "@/components/Form";

import {NextUIProvider} from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
    <div>
      
      <Form></Form>
    </div>
    </NextUIProvider>
  );
}
