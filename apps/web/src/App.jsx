import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/ScrollToTop';
import CustomSiteCode from '@/components/builder/CustomSiteCode';
import CookieConsent from '@/components/builder/CookieConsent';
import WhatsAppBubble from '@/components/builder/WhatsAppBubble';
import { EcommerceCartProvider } from '@/components/builder/blocks/EcommerceCart';
import EcommerceCheckoutSuccess from '@/components/builder/blocks/EcommerceCheckoutSuccess';
import LuyenThiOnlinePage_system_z1Bwg from "@/pages/builder/luyen-thi-online/LuyenThiOnlinePage";
import HinhHoaChiPage_system_z2CYaF from "@/pages/builder/hinh-hoa-chi/HinhHoaChiPage";
import KhoaAfterEffectsPage_system_z3BfB7 from "@/pages/builder/khoa-after-effects/KhoaAfterEffectsPage";
import TrangTriMauPage_system_z6lode from "@/pages/builder/trang-tri-mau/TrangTriMauPage";
import KhoaPremierPage_system_z7Ferm from "@/pages/builder/khoa-premier/KhoaPremierPage";
import MyThuatThieuNhiOnlinePage_system_zAH9RN from "@/pages/builder/my-thuat-thieu-nhi-online/MyThuatThieuNhiOnlinePage";
import GdKhoaChuyenSauPage_system_zASZ_x from "@/pages/builder/gd-khoa-chuyen-sau/GdKhoaChuyenSauPage";
import MyThuatThieuNhiOfflinePage_system_zH7rL1 from "@/pages/builder/my-thuat-thieu-nhi-offline/MyThuatThieuNhiOfflinePage";
import KhmPhThGiiGioDcMThutTiZikzakPage_system_zKf4dd from "@/pages/builder/khm-ph-th-gii-gio-dc-m-thut-ti-zikzak/KhmPhThGiiGioDcMThutTiZikzakPage";
import KhoaCanvaPage_system_zNqyRH from "@/pages/builder/khoa-canva/KhoaCanvaPage";
import KhoaVeProcreatePage_system_zO87Pm from "@/pages/builder/khoa-ve-procreate/KhoaVeProcreatePage";
import KhoaIndesignPage_system_zOPD35 from "@/pages/builder/khoa-indesign/KhoaIndesignPage";
import KhoaIllustrationPage_system_zQyil6 from "@/pages/builder/khoa-illustration/KhoaIllustrationPage";
import KhoaVeDigitalToanDienPage_system_zXKUGJ from "@/pages/builder/khoa-ve-digital-toan-dien/KhoaVeDigitalToanDienPage";
import KhoaVePhotoshopPage_system_zemG_W from "@/pages/builder/khoa-ve-photoshop/KhoaVePhotoshopPage";
import GdKhoaUxUiToanDienPage_system_zgCrnZ from "@/pages/builder/gd-khoa-ux-ui-toan-dien/GdKhoaUxUiToanDienPage";
import LuyenThiOfflinePage_system_zltu4T from "@/pages/builder/luyen-thi-offline/LuyenThiOfflinePage";
import KhoaPhotoshopPage_system_zncVMJ from "@/pages/builder/khoa-photoshop/KhoaPhotoshopPage";
import KhoaCapcutPage_system_zoqgck from "@/pages/builder/khoa-capcut/KhoaCapcutPage";
import KhoaThietKeUiPage_system_zr6Jni from "@/pages/builder/khoa-thiet-ke-ui/KhoaThietKeUiPage";
import TrienLamOrTranhCuaHocVienPage_system_zrw6Jf from "@/pages/builder/trien-lam-or-tranh-cua-hoc-vien/TrienLamOrTranhCuaHocVienPage";
import DjangKyNgayPage_system_zwvX_6 from "@/pages/builder/djang-ky-ngay/DjangKyNgayPage";
import KhmPhThGiiNghThutCngZikzakPage_system_zytf_T from "@/pages/builder/khm-ph-th-gii-ngh-thut-cng-zikzak/KhmPhThGiiNghThutCngZikzakPage";
import HopDongLienKetGiangDayPage_system_ai_5se3X from "@/pages/builder/hop-dong-lien-ket-giang-day/HopDongLienKetGiangDayPage";
import InAnPage_system_ai_6gArF from "@/pages/builder/in-an/InAnPage";
import GraphicDesignOrThietKeDjoHoaPage_system_ai_GvQeQ from "@/pages/builder/graphic-design-or-thiet-ke-djo-hoa/GraphicDesignOrThietKeDjoHoaPage";
import ZikzakArtLuyenThiDaiHocPage_system_ai_KVQ7G from "@/pages/builder/zikzak-art-luyen-thi-dai-hoc/ZikzakArtLuyenThiDaiHocPage";
import DigitalPaintingOrVeKyThuatSoPage_system_ai_OYBPk from "@/pages/builder/digital-painting-or-ve-ky-thuat-so/DigitalPaintingOrVeKyThuatSoPage";
import ZikzakArtWorkshopPage_system_ai__WN_9 from "@/pages/builder/zikzak-art-workshop/ZikzakArtWorkshopPage";
import ZikzakShopPage_system_ai_okg1w from "@/pages/builder/zikzak-shop/ZikzakShopPage";
import ZikzakArtKidOrMyThuatThieuNhiPage_system_ai_v8L99 from "@/pages/builder/zikzak-art-kid-or-my-thuat-thieu-nhi/ZikzakArtKidOrMyThuatThieuNhiPage";
import ZikzakArtProOrMyThuatChuyenSauPage_system_ai_zA3F7 from "@/pages/builder/zikzak-art-pro-or-my-thuat-chuyen-sau/ZikzakArtProOrMyThuatChuyenSauPage";
import HomePage_system_ai_zVxJ6 from "@/pages/builder/home/HomePage";
import DynamicProductPage_system from "@/pages/builder/dynamic-product/DynamicProductPage";
import '@/components/builder/styles/global.css';

function App() {
	return (
		<TooltipProvider>
			<EcommerceCartProvider>
				<Router>
					<ScrollToTop />
					<CustomSiteCode />
					<CookieConsent />
					<WhatsAppBubble />
					<EcommerceCheckoutSuccess />
					<Routes>
					<Route path={"/luyen-thi-online"} element={<LuyenThiOnlinePage_system_z1Bwg />} />
					<Route path={"/hinh-hoa-chi"} element={<HinhHoaChiPage_system_z2CYaF />} />
					<Route path={"/khoa-after-effects"} element={<KhoaAfterEffectsPage_system_z3BfB7 />} />
					<Route path={"/trang-tri-mau"} element={<TrangTriMauPage_system_z6lode />} />
					<Route path={"/khoa-premier"} element={<KhoaPremierPage_system_z7Ferm />} />
					<Route path={"/my-thuat-thieu-nhi-online"} element={<MyThuatThieuNhiOnlinePage_system_zAH9RN />} />
					<Route path={"/gd-khoa-chuyen-sau"} element={<GdKhoaChuyenSauPage_system_zASZ_x />} />
					<Route path={"/my-thuat-thieu-nhi-offline"} element={<MyThuatThieuNhiOfflinePage_system_zH7rL1 />} />
					<Route path={"/khm-ph-th-gii-gio-dc-m-thut-ti-zikzak"} element={<KhmPhThGiiGioDcMThutTiZikzakPage_system_zKf4dd />} />
					<Route path={"/khoa-canva"} element={<KhoaCanvaPage_system_zNqyRH />} />
					<Route path={"/khoa-ve-procreate"} element={<KhoaVeProcreatePage_system_zO87Pm />} />
					<Route path={"/khoa-indesign"} element={<KhoaIndesignPage_system_zOPD35 />} />
					<Route path={"/khoa-illustration"} element={<KhoaIllustrationPage_system_zQyil6 />} />
					<Route path={"/khoa-ve-digital-toan-dien"} element={<KhoaVeDigitalToanDienPage_system_zXKUGJ />} />
					<Route path={"/khoa-ve-photoshop"} element={<KhoaVePhotoshopPage_system_zemG_W />} />
					<Route path={"/gd-khoa-ux-ui-toan-dien"} element={<GdKhoaUxUiToanDienPage_system_zgCrnZ />} />
					<Route path={"/luyen-thi-offline"} element={<LuyenThiOfflinePage_system_zltu4T />} />
					<Route path={"/khoa-photoshop"} element={<KhoaPhotoshopPage_system_zncVMJ />} />
					<Route path={"/khoa-capcut"} element={<KhoaCapcutPage_system_zoqgck />} />
					<Route path={"/khoa-thiet-ke-ui"} element={<KhoaThietKeUiPage_system_zr6Jni />} />
					<Route path={"/trien-lam-or-tranh-cua-hoc-vien"} element={<TrienLamOrTranhCuaHocVienPage_system_zrw6Jf />} />
					<Route path={"/djang-ky-ngay"} element={<DjangKyNgayPage_system_zwvX_6 />} />
					<Route path={"/khm-ph-th-gii-ngh-thut-cng-zikzak"} element={<KhmPhThGiiNghThutCngZikzakPage_system_zytf_T />} />
					<Route path={"/hop-dong-lien-ket-giang-day"} element={<HopDongLienKetGiangDayPage_system_ai_5se3X />} />
					<Route path={"/in-an"} element={<InAnPage_system_ai_6gArF />} />
					<Route path={"/graphic-design-or-thiet-ke-djo-hoa"} element={<GraphicDesignOrThietKeDjoHoaPage_system_ai_GvQeQ />} />
					<Route path={"/zikzak-art-luyen-thi-dai-hoc"} element={<ZikzakArtLuyenThiDaiHocPage_system_ai_KVQ7G />} />
					<Route path={"/digital-painting-or-ve-ky-thuat-so"} element={<DigitalPaintingOrVeKyThuatSoPage_system_ai_OYBPk />} />
					<Route path={"/zikzak-art-workshop"} element={<ZikzakArtWorkshopPage_system_ai__WN_9 />} />
					<Route path={"/zikzak-shop"} element={<ZikzakShopPage_system_ai_okg1w />} />
					<Route path={"/zikzak-art-kid-or-my-thuat-thieu-nhi"} element={<ZikzakArtKidOrMyThuatThieuNhiPage_system_ai_v8L99 />} />
					<Route path={"/zikzak-art-pro-or-my-thuat-chuyen-sau"} element={<ZikzakArtProOrMyThuatChuyenSauPage_system_ai_zA3F7 />} />
					<Route path={"/"} element={<HomePage_system_ai_zVxJ6 />} />
					<Route path={"/:slug"} element={<DynamicProductPage_system />} />
					<Route path={"/product/:slug"} element={<DynamicProductPage_system />} />
					</Routes>
				</Router>
			</EcommerceCartProvider>
			<Toaster />
		</TooltipProvider>
	);
}

export default App;
