<template>
  <v-container>
    <v-row>
      <p>
        {{
          "Why don&#x2019;t all Christians believe the same things about what Jesus\
        taught? The answer to that question has been discussed and debated for\
        centuries now. Perhaps a more common question today we might hear though\
        is why does it matter whether they do or not? Our Lord himself gives us\
        a reason it matters:"
        }}
      </p>
      <p>
        {{
          '&#34;And not for them only do I pray, but for them also who through\
        their word shall believe in me; That they all may be one, as thou,\
        Father, in me, and I in thee; that they also may be one in us;'
        }}
        <strong>{{
          "that the world may believe that thou hast sent me.”&nbsp;John 17:\
          21"
        }}</strong>
      </p>
      <p>
        {{`This is Jesus praying for those who believe in him right before he goes\
          to die for us. And he is praying that they, all Christians, be one. Not\ 
          just to tolerate each other or to collaborate on prolife ministry efforts.\
          He prays that we be one “as thou, Father, in me, and I in thee”. They are\
          of “one mind” to borrow a phrase from St. Paul. There love is so deep it\
          is a person, the Holy Spirit.`}}
      </p>
      <p>
        {{
          "From this prayer we also see the result of being one---“that the world may\
           believe that thou hast sent me.” This gives a proper perspective now to any\
            discussion of why Christians believe different things and why it’s important\
             to try and be of one mind. Our divisions are obstacles to those in our cities\
              knowing Christ."
        }}
      </p>
            <p>
        {{
          "Out of love for our Lord Jesus Christ I invite you to consider this strange quandary\
           of our divisions and to consider my invitation herein to discuss how we can be one.\
            I am a Roman Catholic who lives in Hastings Minnesota. I am not a priest nor theologian.\
             I am a layman struck by the prayer of our Lord for divided Christians. If you are reading\
              this letter I or one of my fellow Catholic brothers handed you a card inviting you to\
               this website to read this letter and consider meeting in person. You are welcome to\
                join us at one of the local coffee shops in Hastings, MN every other Saturday morning.\
                 There is a similar opportunity in St. Paul MN. We are always there and we wish to dedicate\
                  spending this time speaking with those Christians who would like to strive to be one.\
                   If you are not able to join at those times or if meeting in person is not something\
                    that you feel comfortable with you are welcome to reply/ask questions over email\
                     or through the website."
        }}
      </p>
      <p>
        {{
          "I’m not presuming you have any desire to be Catholic and I can tell you I don’t\
           have any doubts about the Catholic faith. If you would like to discuss a scripture\
            passage or other thoughts on how to know what Christ taught please know we are happy\
             to listen to you. If you’d like to familiarize\
           yourself with the Catholic perspective there are a few other letters on\
            this website you can read."
        }}
      </p>
      <p>
        {{
          "I’m not interested in a battle of ideas, but in making a faithful attempt\
           to heed our Lord who shed his blood for us and desired us to be one. At a\
            time when the world seems determined to tear itself apart perhaps a reunion\
             of Christians can be a witness to a wayward world and help it to know that\
              the Father has sent him. Our Lord has prayed for us, what more help can we\
               need to discover the truth of his teachings?"
        }}
      </p>
    </v-row>
    <v-row>
      <p>{{ "Christ&#x2019;s peace to you," }}</p>
    </v-row>
    <v-row>
      <p>{{ "Derek Roush" }}</p>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: "ArticleOne",
  methods: {
    onClick(e) {
      e.stopPropagation();
   
        this.$router.push({ name: "home", offset: 40 });
    },
  },
};
</script>
