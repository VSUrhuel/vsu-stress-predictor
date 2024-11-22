'use client'
import Form from '@/components/Form'

export default function Home() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="bg-[#146939] w-full h-60 absolute z-0"></div>
                <div className="mt-10 w-full mb-24">
                    <Form></Form>
                </div>
            </div>
        </div>
    )
}
