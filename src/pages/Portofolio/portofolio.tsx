import { NavigationMenuDemo } from '@/components/navbar'
import { TableProject } from '@/components/table-demo'

export default function Portofolio() {
  return (
    <div>
      <div className="bg-blue-950">
        <NavigationMenuDemo className='text-white' textColor='text-black'/>
      </div>
        <section className="min-h-screen py-24 px-6 md:px-16  text-slate-800 relative overflow-hidden">
            <div className="mb-5">
                <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest text-center uppercase">Data Pengalaman Pekerjaan</h2>
                <p className="text-indigo-600 text-sm uppercase tracking-widest text-center">Data Pengalaman Pekerjaan</p>
            </div>

            <TableProject/>    
        </section>
    </div>
  )
}
