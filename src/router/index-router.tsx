import Galeri from "@/pages/Dokumentasi/galeri"
import Kai from "@/pages/Dokumentasi/kai"
import Home from "@/pages/Home/home"
import Kontak from "@/pages/Kontak/kontak"
import AgrikulturDrone from "@/pages/Layanan/agrikultur-drone"
import PengembanganAplikasi from "@/pages/Layanan/pengembangan-aplikasi"
import SistemInformasiGeografis from "@/pages/Layanan/sistem-informasi-geografis"
import Topografi from "@/pages/Layanan/topografi"
import Portofolio from "@/pages/Portofolio/portofolio"
import Product from "@/pages/Product/product"
import TentangKami from "@/pages/Tentang Kami/tentang-kami"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/kontak" Component={Kontak}/>
                <Route path="/portofolio" Component={Portofolio}/>
                <Route path="/produk" Component={Product}/>
                <Route path="/dokumentasi/galeri" Component={Galeri}/>
                <Route path="/dokumentasi/kerjasama%20dengan%20pt.kai" Component={Kai}/>
                <Route path="/tentang-kami" Component={TentangKami}/>
                <Route path="/layanan/sistem-informasi-geografis" Component={SistemInformasiGeografis}/>
                <Route path="/layanan/pemetaan-topografi-dan-utilitas" Component={Topografi}/>
                <Route path="/layanan/agrikultur-drone" Component={AgrikulturDrone}/>
                <Route path="/layanan/pengembangan-aplikasi-web-dan-mobile" Component={PengembanganAplikasi}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router