export const articleList = {
  state: {
    articles: [
      // {
      //   id: 1,
      //   title: "INTRODUCTION LETTER",
      //   author: "Derek Roush",
      //   category: "Welcome",
      //   prominent: "true",
      //   preview:
      //     "<p>Why don&#x2019;t all Christians believe the same things about what Jesus taught? The answer to that question has been discussed and debated for centuries now. Perhaps a more common question today we might hear though is why does it matter whether they do or not? Our Lord himself gives us a reason it matters:</p><p>&#34;And not for them only do I pray, but for them also who through their word shall believe in me; That they all may be one, as thou, Father, in me, and I in thee; that they also may be one in us; <strong>that the world may believe that thou hast sent me.”&nbsp;John 17: 21</strong></p>",
      // },
      {
        id: 2,
        title: "DO YOU BELIEVE THE SAME THINGS AS THE EARLY CHRISTIANS?",
        author: "Derek Roush",
        category: "Early Christians",
        preview:
          "<p>&nbsp;Let me begin this effort to dispel divisions with an appeal to our common roots. Christ and his apostles. My aim is to show you with a brief beginning effort here the ease with which we can see the beliefs of the early Christians are in alignment with Catholics. You will see they do not believe what you believe about Christ&#x2019;s teaching. I would like to share this with you not by rattling off quotes as proof texts from ancient men in whom you would not place any authority. Rather I would like to study the historical value of their words for us both and begin our discussion on this topic with a question. If you believe the Early Christians I cite preach something false about what Christ taught then where in the early church can you find your doctrines? Where do you find sola scriptura among the early Christians?</p>",
      },
      {
        id: 3,
        title: "WHY DO WE HAVE DIFFERENT INTERPRETATIONS OF SCRIPTURE?",
        author: "Derek Roush",
        category: "Scripture",
        preview:
          "<p>The heart of most of our differences I imagine will stem from different interpretations of scripture. On the same thread as the treatise on the Early Christians I would be curious to understand the origins of our interpretative differences. Are you and I the first to disagree on whichever passage you may want to look at? Or does it go back to the 1500s? Or further?</p>",
      },
      {
        id: 4,
        title: "MARIAN AND EUCHARISTIC MIRACLES",
        author: "Derek Roush",
        category: "Miracles",
        preview:
          "<p>I ended my last letter by emphasizing we are having a 500-year-old argument. It seems a bit odd that people could disagree about anything for that long, yet here we are. It could also be a bit discouraging in attempts to try and resolve the differences. If it hasn&#x2019;t been resolved in 500 years why try, we might ask.</p><p>If this argument hasn&#x2019;t been resolved in 500 years then it seems clear to conclude we won&#x2019;t resolve it of our own human reasonings and argumentations. We are talking about matters of faith here after all and faith is a gift. All throughout scripture we see the gift of faith tied to miracles. An act of faith expressed to Jesus always proceeds his power flowing forth to heal the sick, give sight to the blind, etc. These same miracles also beget more faith, as we see in those who witness the miracles. Thomas does not believe but placing his hand in our Lords wounds helps him believe.</p><p>In this context I would like to explain a few examples of how our Lord has for the last 2000 years and continues to this day to perform miracles that help us have faith the Catholic Church is his Church.</p>",
      },
    ],
    checkout: "1",
  },
  getters: {
    categories: (state) => {
      const categories = [];

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find((category) => category.text === article.category)
        )
          continue;

        const text = article.category;

        categories.push({
          text,
          href: "#!",
        });
      }

      return categories.sort().slice(0, 4);
    },

    getArticle: (state) => {
      return state.articles.find((article) => article.id == state.checkout);
    },

    getAllArticles: (state) => {
      return state.articles;
    },
  },
  mutations: {
    setCheckout: (state, payload) => (state.checkout = payload),
  },
  actions: {
    checkOut({ commit }, id) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("setCheckout", id);
          resolve();
        }, 250);
      });
    },
  },
};
