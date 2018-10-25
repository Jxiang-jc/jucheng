<template>
<div class="category-container ">
    <div class="category-wrap">
        <a class="cate-link "
        v-for="(category,idx) in categories" :key="idx"
        :href="category.link">
            <div class="img-box ">
                <img :src="category.imgurl" alt=" "></div>
            <p class="classify " v-text="category.title"></p>
        </a>
    </div>
    <div class="module-wrap ">
        <a class="item privilege"
        v-for="(mod,idx) in modules" :key="idx"
        :href="mod.link">
            <img :src="mod.imgurl">
            <p class="item-txt" v-text="mod.title"></p>
        </a>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        {
          imgurl: 'http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUxWAVCq7AAA1AYjHYo4689.png',
          title: '演唱会',
          link: 'https://m.juooo.com/show/showsLibrary?cid=3&amp;name=广州&amp;caid=35'
        },
        {
          imgurl: 'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyCATRKeAAAs7TXa0as743.png',
          title: '音乐会',
          link: 'https://m.juooo.com/show/showsLibrary?cid=3&amp;name=广州&amp;caid=36'
        },
        {
          imgurl: 'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyiAJYdkAAAznnkz53A336.png',
          title: '舞台剧',
          link: 'https://m.juooo.com/show/showsLibrary?cid=3&amp;name=广州&amp;caid=37'
        },
        {
          imgurl: 'http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUzCANA78AAAuNmAUVOY761.png',
          title: '音乐剧',
          link: 'https://m.juooo.com/show/showsLibrary?cid=3&amp;name=广州&amp;caid=79'
        },
        {
          imgurl: 'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUzmASY4pAAAm76AQAHw370.png',
          title: '儿童',
          link: 'https://m.juooo.com/show/showsLibrary?cid=3&amp;name=广州&amp;caid=38'
        }
      ],
      modules: [
        {
          imgurl: 'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png',
          title: '演出日历',
          link: 'https://m.juooo.com/calendar/index'
        },
        {
          imgurl: 'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png',
          title: '聚特惠',
          link: 'https://m.juooo.com/activity/index'
        },
        {
          imgurl: 'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png',
          title: '学生专区',
          link: 'http://m.juooo.com/Student/index'
        },
        {
          imgurl: 'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIc2AR3T7AAAGkekOAEY845.png',
          title: '欢聚橙卡',
          link: 'https://m.juooo.com/Cardproduct/index'
        }
      ]
    }
  }
}
</script>

 <style lang="scss" scoped>
.category-wrap {
    margin: 20px 25px 0;
    padding: 27px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(178, 178, 178, 0.1);
    .cate-link {
        display: block;
        text-align: center;
        flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        -ms-box-flex: 1;
        -webkit-box-flex: 1;
    }
}
.category-wrap .cate-link .img-box img {
    width: 105px;
}
.category-wrap .cate-link .classify {
    font-size: 24px;
    color: #333;
}
.module-wrap {
    padding: 40px 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: start;
    .item {
        margin-right: 15px;
        color: #fff;
        position: relative;
        z-index: 0;
        flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        box-flex: 1;
        -ms-box-flex: 1;
        -webkit-box-flex: 1;
        >img{
            border-radius: 10px;
            vertical-align: middle;
            width: 100%;
        }
        .item-txt{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            text-align: center;
            line-height: 100px;
            font-size: 28px;
            color: #fff;
            z-index: 99;
        }

    }
}
</style>
