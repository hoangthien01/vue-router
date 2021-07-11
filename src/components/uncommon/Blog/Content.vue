<template>
  <div class="blog-memo">
    <p class="title">{{ blog.title }}</p>
    <p class="sub-title">{{ blog.subTitle }}</p>
    <p class="tag">#{{ blog.head }}</p>
    <p class="description">{{ blog.description }}</p>
    <p class="description">
      Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore.
      Aliquip consectetur labore consectetur dolor exercitation est minim
      quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim
      Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident
      ex commodo irure est.
    </p>
    <p class="description">
      Nisi commodo qui pariatur enim sint laborum consequat enim in officia.
      Officia fugiat incididunt commodo et mollit aliqua non aute. Enim
      dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit
      velit duis.
    </p>
    <p class="description">
      Est Lorem labore consectetur minim sit eu eiusmod mollit velit.
      Consectetur voluptate ex amet id eiusmod laborum irure. Aliquip ad qui
      id exercitation irure amet commodo nisi quis. Occaecat minim
      incididunt eiusmod nostrud veniam quis culpa.Nisi ipsum et consequat
      id deserunt excepteur. Cillum non pariatur culpa ut occaecat laboris
      eu. Ullamco ad Lorem et elit laboris eu qui irure nulla qui culpa et.
      Cupidatat sunt ipsum proident aute exercitation do tempor aliqua
      cupidatat quis non exercitation. Adipisicing do minim dolore nulla
      mollit. Adipisicing incididunt irure ipsum et in esse ipsum elit
      tempor.
    </p>
  </div>
</template>

<script>
export default {
  props: ["blog"],
}
</script>

<style scoped>
.title {
  font-family: Libre Baskerville;
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;
  text-align: center;
  color: #000000;
}
.sub-title,
.tag {
  margin-top: 17px;
  font-size: 22px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
  text-align: center;
}
.tag {
  margin-top: 13px;
}
.description {
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-top: 26px;
}

@media (min-width: 768px) and (max-width: 991.98px) {
 .title {
   font-size: 40px;
    line-height: 45px;

 }
 .sub-title,.tag {
   font-size: 20px;
 }
.description{
  font-size: 19px;
    line-height: 24px;
}
  }
</style>