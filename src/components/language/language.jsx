import React, { Suspense } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import About from '../about/about'

const translationAz = {
    about: "Haqqında",
    projects: "Proyektlər",
    certficates: "Sertfikatlar",
    contact: "Əlaqə",
    textcontact:"İş nümunələri üçün zəhmət olmasa GİTHUB hesabımı izləyin...",
    prev:"Geri",
    next:"İrəli",
    fullname: "Ad və Soyad",
    ePost:"Elektron poçt ünvanı",
    offer:"Təklif və iradlarınızı bizimlə bölüşün",
    insertFullName:"Məsələn: Kərimli Ağabala",
    submit:"Göndər",
    read:"03.03.1993 – cü ildə Zərdab rayonu Pərvanlı kəndində anadan olmuşam . 2011 – ci ildə 439 bal toplayaraq ADPU – nun Coğrafiya müəllimliyi ixtisasına qəbul olmuşam(ödənişsiz) . 2015 – ci ildə Akademik məzuniyyət götürərək Hərbi Xidmətə getmişəm. 2017 – ci ildə universiteti bitirib MİQ imtahanında 44 bal toplayaraq hazırda işlədiyim İmişli rayonu S.Məmmədov adına Axıcanlı kənd tam orta məktəbinə qəbul olmuşam. Hazırda əmək müqaviləmə əsasən həmin müəssisənin işçisiyəm. Əlavə olaraqda həmin rayonun A.Allahverdiyev adına Qaralar kənd tam orta məktəbdədə 3 il müddətli müqavilə ilə çalışmışam . Həmçinin hər iki məktəbin UTİS, ŞAGİRD-MƏZUN, e-gov və s. sistemlər üzrə kordinatoruyam.Artıq iş sahəmi İT - ə doğru dəyişmişəm",
    read2:"2017 – ci ildə bitirmişəm 2011 – ci ildə TB Bilgi tədris mərkəzində 6 aylıq Office proqramları, Adobe Photoshop proqramları üzrə kurs keçmişəm . Sertfikat verilib Təhsil sahəsində bir çox online kurslarda olmuşam. STEAM, UTİS və.s Hazırda 3 kursda iştirak edirəm . 1 – i əyani 2 – si isə online.1. Təhsil Nazirliyinin təşkil etdiyi «SQL proqramçı» kursunu bitirib sertfikat imtahani vermişəm(92/100 bal).2. Gənclər və idman Nazirliyinin təşkil etdiyi «WEB proqramlaşdırma» (HTML, CSS, JAVA SCRİPT) üzrə online təlimlərdə iştirak etdim . Sertfikat imtahanı verdim.3. Təhsil Nazirliy, İqtisadiyyat Nazirliyi və İT-Academy təşkil etdiyi Web developer kursunda 4 aydir ishtirak edirəm 4. Hal - hazırda online olaraq Oracle DB - üzrə SQL biliyimi möhkəmləndirirəm.",
    textRead:"Davamını oxu",
    presentations:"Təqdimatlar",
    news:"Front-end proqramçı"



}
const translationEn = {
    about: "About",
    projects: "Projects",
    certficates: "Certficates",
    contact: "Contact",
    textcontact:"Please follow my GITHUB account for working samples...",
    prev:"Preview",
    next:"Next",
    fullname: "Name and Surname",
    ePost:"E-mail adress",
    offer:"Share your suggestions and comments with us...",
    insertFullName:"For example: Karimli Aghabala",
    submit:"Submit",
    read:"I was born on 03.03.1993 in the village of Parvanli, Zardab region. In 2011, having scored 439 points, I was admitted to ADPU's Geography teaching specialty (free of charge). In 2015, I took academic leave and went to military service. In 2017, I graduated from the university and scored 44 points in the MEC exam. Currently, I am an employee of that enterprise according to my employment contract. In addition, I worked at the Karalar village secondary school named after A. Allahverdiyev of the same region with a 3-year contract. Also, UTIS, STUDENT-GRADUATE, e-gov etc. of both schools. I am a systems coordinator. I have already changed my field of work to IT",
    read2:"I graduated in 2017. In 2011, I completed a 6-month course on Office programs and Adobe Photoshop programs at the TB Bilgi educational center. Certificate issued. I have attended many online courses in the field of education. STEAM, UTIS, etc. I am currently participating in 3 courses. 1 is visual and 2 is online. 1. I finished the SQL programmer course organized by the Ministry of Education and passed the certificate exam (92/100 points). 2. I participated in online trainings on WEB programming (HTML, CSS, JAVA SCRIPT) organized by the Ministry of Youth and Sports. I passed the certificate exam. 3. I have been participating in the Web developer course organized by the Ministry of Education, Ministry of Economy and IT-Academy for 4 months 4. Currently, I am strengthening my SQL knowledge on Oracle DB online.",
    textRead:"Read more",
    presentations:"Presentations",
    news:"Front-end developer"
}
const translationRu = {
    about: "Обо мне",
    projects: "Проекты",
    certficates: "Сертификаты",
    contact: "Контакт",
    textcontact:"Пожалуйста, подпишитесь на мою учетную запись GITHUB для получения рабочих образцов...",
    prev:"Назад",
    next:"Вперед",
    fullname: "Имя и фамилия",
    ePost:"Адрес электронной почты",
    offer:"Поделитесь с нами своими предложениями и комментариями...",
    insertFullName:"Например: Керимли Агабала",
    submit:"Отправить",
    read:"Я родился 03.03.1993 года в селе Пырванлы Зардабского района. В 2011 году, набрав 439 баллов, я поступила в АДПУ на педагогическую специальность «География» (бесплатно). В 2015 году я взял академический отпуск и ушел на военную службу. В 2017 году я закончил университет и набрал 44 балла на экзамене МЭК. В настоящее время являюсь работником этого предприятия по трудовому договору. Кроме того, я работал в средней школе села Каралар имени А.Аллахвердиева того же района по контракту на 3 года. А также ЕНВД, СТУДЕНТ-ВЫПУСКНИК, e-gov и т.д. обеих школ. Я системный координатор, уже сменил сферу деятельности на IT",
    read2:"Закончила в 2017 году. В 2011 году прошла 6-месячный курс по офисным программам и программам Adobe Photoshop в образовательном центре ТБ Билги. Сертификат выдан Я посетил много онлайн-курсов в области образования. STEAM, UTIS и т. д. В настоящее время я участвую в 3 курсах. 1 визуальный и 2 онлайн 1. Я закончил курс «Программист SQL», организованный Министерством образования, и сдал сертификационный экзамен (92/100 баллов). Принимала участие в онлайн-тренингах по ВЕБ-программированию (HTML, CSS, JAVA SCRIPT), организованных Министерством молодежи и спорта. Я сдал сертификационный экзамен 3. Я участвую в курсе веб-разработчика, организованном Министерством образования, Министерством экономики и ИТ-Академией в течение 4 месяцев. 4. В настоящее время я совершенствую свои знания SQL в Oracle DB онлайн».",
    textRead:"Читать больше",
    presentations:"Презентации",
    news:"Фронтенд программист"
}
i18n
    .use(initReactI18next)
    .init({
        resources: {
            az: { translation: translationAz },
            en: { translation: translationEn },
            ru: { translation: translationRu },
        },
        lng: 'az',
        fallbackLng: 'az',
        interpolation: {
            escapeValue: { escapeValue: false },
        }
    });

const language = () => {
    const onClick = (e) => {
        e.preventDefault()
        i18n.changeLanguage(e.target.value)
        {<About/>}
      }
    return (
        <Suspense fallback="Loading...">
            <form className="form-inline my-2 my-lg-0 " onClick={onClick}>
                <button className="btn btnHover text-white" type="submit" value="az">AZE</button>
                <button className="btn btnHover  text-white" type="submit" value="en">ENG</button>
                <button className="btn btnHover text-white" type="submit" value="ru">RUS</button>
            </form>
        </Suspense>
    )
}

export default language
