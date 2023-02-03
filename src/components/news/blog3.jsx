import React from 'react'
import './news.css'
import News1 from '../../assets/image/image-news/cal-1.jpg';
import News2 from '../../assets/image/image-news/cal-2.gif';
import News3 from '../../assets/image/image-news/cal-3.jpg';
import News4 from '../../assets/image/image-news/cal-4.jpg';
import News5 from '../../assets/image/image-news/cal-5.gif';
import { Link } from 'react-router-dom';

const Blog2 = () => {
  return (
    <div className="news2" >
    <h3>Asinxron Proqramlaşdırma nədir? Niyə Callback funksiyasına ehtiyac duyuruq?.</h3>
    <p>Asinxron proqramlaşdırma deyildiyi zaman, insanlardan eşitəcəyiniz ilk şey bloklanmayan koddur. Yəni uzun bir işin bitməsini gözləmədən digər işlərin həyata keçməsinə Asinxron proqramlaşdırma deyə bilərik.Öncəliklə bunu qeyd etməliyəm ki ,JavaScript Asekxron proqramla məntiqi ilə işlədiyi üçün kod sətirləri bir birini gözləmədən işə düşür.Bunun qarşısını ala bilmək üçün Callback, Promise və Async köməyimizə çatır.

İlk olaraq ‘Callback’ funksiyasına aid bir misal göstəcəm və izahı onun üzərindən verəcəm .</p>
    <img src={News1}  alt="" />
    <h6>Şəkil-1</h6>
    <p>Yuxarı hissədə yazdığım kod blokuna fikir versəz görəcəksiz ki, biz buttona click etdiyimiz zaman ilk olaraq setTimeout() funksiyasının çölündəki kod işə düşərək success yazısını ekrana yazdırdı , sonra isə setTimeout() funksiyası işə düşdü və 2 saniyyə sonra ikinci success yazısını ekrana yazdırdı .</p>
    <img src={News2} alt="" />
    <h6>Şəkil-2</h6>
    <p>Yəni bir birini gözləmədən işə düşdülər .Biz bu prosesə asinxron proqramlama deyirik. Asinxron proqramlamada kodlar bir birini gözləmədən işə düşür əgər bir birini gözləyərək işə düşən kod bloklarımız olsaydı browser donaraq heç bir proses həyata keçirməyəcəkdi.Bu asinxron proqramlamanın məntiqini anlamaq üçün yazdığım ən sadə nümunə idi. İndi başqa bir nümunə ilə daha da ətraflı izah verməyə çalışacam.</p>

    <img src={News3} alt="" />
    <h6>Şəkil-3</h6>
    <p>Gördüyünüz kimi data adı altında bir arrayimiz var və getArray funksiyasının köməyi ilə biz həmin arrayin elementlərini ala bilirik. Və daha sonra ora yeni bir data əlavə etmək istədiyimiz zaman yeni bir funksiya yaradaraq ora yeni datanı push etsək hərşey normal olaraq işləyəcək .Amma push etdiyimiz data müəyyən zaman intervalından sonra gəlsə işə düşməyəcəkdi. Çünki ilk olaraq getArray() funksiyasi çağrıldığı üçün newData() funksiyasi işə düşməyəcəkdi. Elə bu səbəbdən Callback funkisyalar köməyimizə çatır.</p>
    <img src={News4} alt="" />
    <h6>Şəkil-4</h6>
    <p>Yuxarı hissədə qeyd etdiyim kodlara nəzər salsaz görəcəksiniz ki ,Callback ilə push edəcəyimiz funksiyanın içərisinə bir funskiya daha yazırıq və onu parametr olaraq çağırırıq . Daha sonra isə ümumi datalarımızı çağırdığımız funksiyanı parametr olaraq yazırıq və istədiyimiz nəticəni alırıq</p>

    <img src={News5} alt="" />
    <h6>Şəkil-5</h6>
    <p>Şəkil-5 də göründüyü kimi kodlarımız öz asinxronluğunu itirərək bir birini gözləyib 3 saniyyə sonra işə düşdü.</p>

    <Link className="nav-link btn text-white btnHover" to="/news">Əsas səhifəyə qayıt</Link>
</div> 
  )
}

export default Blog2