'use client'
import Form from '@/components/Form'
import ParticlesComponent from '@/components/particles'

export default function Home() {
    return (
        <div>
      <div className="flex justify-center">
        <div className="relative w-full max-w-screen-xl">  {/* Container for particles and form */}
          <div className="bg-[#146939] w-full max-h-30 absolute -z-10">
            <ParticlesComponent className="absolute -z-10" id="particles" />
          </div>
         
          <div className="mt-10 w-full mb-24 absolute z-50">
            <Form></Form>
          </div>

          
        </div>
        <div className="bg-white absolute z-10 w-full  h-3/4 -bottom-20 "></div>
      </div>
    </div>
    )
}
