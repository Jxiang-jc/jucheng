<template>
<div class="Ju-dticket-notice">
    <div class="ad-box">
        <a href="https://click.juooo.com/click/index?url=https%3A%2F%2Fm.juooo.com%2FCardproduct%2FshowCardInfo%2Fcard_group_id%2F253&amp;type=1&amp;ad_id=71&amp;flag=TSF">
            <img src="http://image.juooo.com/group1/M00/01/9A/rAoKmVvESlSAZruAAABbzlTnxyc625.jpg" title="橙plus卡预购启动" alt="橙plus卡预购启动">
        </a>
    </div>
    <div class="placeholder"></div>
    <article class="ticket-notice">
        <h3 class="title">— 购票须知 —</h3>
        <div class="ticket-txt">
            <p>1.为避免快递配送不能及时到达，距演出开场时间少于3天不提供快递服务，您可以选择电子票或者在线支付后上门自取纸质票。（主办演出可在演出现场取票）。</p>
            <p>2.网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票。</p>
            <p>3.成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
            <p>4.因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
        </div>
        <div class="in-to-know">
            入场须知： <span class="text">1.2米以下儿童谢绝入场，1.2米以上儿童凭票入场</span>
        </div>
    </article>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.placeholder{
    height:22px;
    width:100%;
    background:#eeebeb;
}
.Ju-dticket-notice{
    margin-bottom:110px;
}
.ad-box {
    margin-top: 22px;
    img{width:100%;}
}

.ticket-notice {
    margin: 22px 0;
    padding: 0 30px;
    background: #fff;
    .title {
        padding-top: 45px;
        font-size: 32px;;
        font-weight: normal;
        text-align: center;
        color: #212121;
    }
    .ticket-txt {
        padding-top: 20px;
        font-size: 28px;
        overflow: hidden;
        >p{line-height: 50px;}
    }
    .in-to-know {
        margin-top: 15px;
        border-top: 1px dashed #ccc;
        padding: 26px 0 35px;
        font-size: 26px;
        line-height: 35px;
        color: #999;
        .text{
            color:#666;
        }
    }
}
</style>
