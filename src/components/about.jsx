import React,{useState} from 'react'
import "./about.css"
import "./css_library/animation.css"
import "./css_library/flexslider.css"
import "./css_library/style.css"
import Myphoto from "../assets/image/aga.png"

export default function About() {
    const[about,setAbout] = useState(false)
    return (
        <>
            <div class="container">
                <div className="left fh5co-center-position ">
                    <p className='animate-box fadeInUp animated  '>03.03.1993 – cü ildə Zərdab rayonu Pərvanlı kəndində anadan olmuşam . 2011 – ci ildə 439 bal toplayaraq ADPU – nun Coğrafiya müəllimliyi ixtisasına qəbul olmuşam(ödənişsiz) . 2015 – ci ildə Akademik məzuniyyət götürərək Hərbi Xidmətə getmişəm. 2017 – ci ildə universiteti bitirib MİQ imtahanında 44 bal toplayaraq hazırda işlədiyim İmişli rayonu S.Məmmədov adına Axıcanlı kənd tam orta məktəbinə qəbul olmuşam. Hazırda əmək müqaviləmə əsasən həmin müəssisənin işçisiyəm. Əlavə olaraqda həmin rayonun A.Allahverdiyev adına Qaralar kənd tam orta məktəbdədə 3 il müddətli müqavilə ilə çalışmışam . Həmçinin hər iki məktəbin UTİS, ŞAGİRD-MƏZUN, e-gov və s sistemlər üzrə kordinaatoruyamBundan sonra özümü İT sahəsində yoxlayacam və inanıramkı daha çox uğur qazana biləcəm</p> 
                    <button className='btn btn-outline-success my-2 my-sm-0 animate-box fadeInUp animated' onClick={()=>{setAbout(true)}}>Davamını oxu</button>
                    { about ? <p className='animate-box fadeInUp animated p2' >2011 – ci ildə 439 bal toplayaraq ADPU – nun Coğrafiya müəllimliyi ixtisasına qəbul olmuşam . 2017 – ci ildə bitirmişəm 2011 – ci ildə TB Bilgi tədris mərkəzində 6 aylıq Office proqramları, Adobe Photoshop proqramları üzrə kurs keçmişəm . Sertfikat verilib Təhsil sahəsində bir çox online kurslarda olmuşam. STEAM, UTİS və.s Hazırda 3 kursda iştirak edirəm . 1 – i əyani 2 – si isə online.
                        1. Təhsil Nazirliyinin təşkil etdiyi «SQL proqramçı» kursunu bitirib sertfikat imtahani vermişəm(92/100 bal). Tezliklə sertfikat veriləcək.
                        2. Gənclər və idman Nazirliyinin təşkil etdiyi «WEB proqramlaşdırma» (HTML, CSS, JAVA SCRİPT) üzrə online təlimlərdə iştirak etdim . Sertfikat imtahanı verdim.
                        3. Təhsil Nazirliy, İqtisadiyyat Nazirliyi və İT-Academy təşkil etdiyi Web developer kursunda 1 aydir ishtirak edirəm 4. Hal - hazırda online olaraq Oracle DB - üzrə SQL biliyimi möhkəmləndirirəm.</p> : null}
                </div>

                <div className="right">
                    <img src={Myphoto} alt="myphoto" className='img-responsive animate-box fadeInUp animated' />
                </div>
            </div>
        </>
    )
}
