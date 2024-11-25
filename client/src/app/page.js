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
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-10">© 2024 <a href="https://github.com/VSUrhuel/vsu-stress-predictor" class="hover:underline">Stress Predictor™</a>. All Rights Reserved.</span>

          </div>

          
        </div>
        <div className="bg-white absolute z-10 w-full  h-3/4 -bottom-20 ">

        </div>
      </div>
    </div>
    )
}
