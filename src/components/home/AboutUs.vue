<template>
  <v-container id="joinUs" tag="section">
    <base-card>
      <v-container>
        <base-card flat class="ma-4">
          <v-row>
            <!-- <v-col align="center">
              <v-img
                width="100%"
                height="100%"
                src="../../assets/dudes.png"
              /> </v-col
            > -->
            <v-col align="center">
              <base-subheading>Come Join Us!</base-subheading>
            </v-col>
            <div class="text4 text-wrap ma-4">
              <p>
                The Patria Coffee Shop meetups are a bi-monthly opportunity for
                Christians of any denomination who out of love for Christ would
                try to cooperate with His Will that all Christians be one. The
                gatherings are organized by a group of Catholic men who live in
                the greater Twin Cities area. We love Jesus Christ and his
                prayer revealed to us in John 17:21 for all Christians to be one
                in Him has moved us to extend this invitation to you. We are
                sending the invitation to all Christians of whatever
                denomination in the greater Twin Cities area so feel free to
                pass it along!
              </p>
              <p>
                We are committed to charitable discussion about Jesus Christ and
                His teachings and we ask any who comes to be committed to the
                same. This passage from John we hope can give some direction to
                how we as Christians can pursue unity and what the end goal
                looks like. Two key considerations we'd like you to take to
                heart prior to joining us.
              </p>
              <br />
              <ol>
                <li>
                  <p style="font-size: 25px">
                    Unity means more than tolerance or indifference:
                  </p>
                  <strong
                    >"That they all may be one, as thou, Father, in me, and I in
                    thee; that they also may be one in us."
                  </strong>
                  is asking for more than tolerance. He prays that we be one in
                  the same way He and the Father are one. He prays that we would
                  find this unity with one another by being grafted into the
                  unity the Father and Jesus have. The Father and Jesus do not
                  simply tolerate each other. They do not have disagreements
                  about how humanity is saved or what books of the bible the
                  Holy Spirit inspired. So if Christians find themselves with
                  disagreements or divisions on things Christ and the Father
                  would not be divided on we should pursue unity.....because
                  Jesus prayed it would be so.
                </li>
                <br />
                <li>
                  <p style="font-size: 25px">
                    Growth in unity will witness to the world that the Father
                    sent Jesus:
                  </p>
                  This whole world desperately needs to return to Christ. It is
                  looking for happiness in all the wrong places. Jesus' prayer
                  reveals our growth in unity is a means to help the world
                  believe in Christ. What does this tell us about the Greater
                  St. Paul/Minneapolis area and Hastings, MN? Can our pursuit of
                  unity help them? From Jesus' prayer we see the answer is a
                  divinely revealed YES!
                </li>
              </ol>
              <br />

              <p>
               {{"We are open to discussing any topic or question you would like\
                to bring with you. A great place to start is answering the\
                question: How can we know what true Christian teaching is? We'd\
                enjoy the chance to hear your answer. If you'd like to get\
                familiar with the Catholic perspective prior to coming to a meet\
                up you can view some short introductory articles by clicking"}}
                <v-btn
                  x-small
                  outlined
                  elevation="0"
                  :to="appBarLinks[3].to"
                  :href="appBarLinks[3].href"
                  @click="onClick($event, appBarLinks[3])"
                  >{{ "here."
                  }}<v-icon right>{{ appBarLinks[3].icon }}</v-icon></v-btn
                >
                . There is a calendar with dates and meeting places                 <v-btn
                  x-small
                  outlined
                  elevation="0"
                  :to="appBarLinks[2].to"
                  :href="appBarLinks[2].href"
                  @click="onClick($event, appBarLinks[2])"
                  >{{ "here."
                  }}<v-icon right>{{ appBarLinks[2].icon }}</v-icon></v-btn
                > Currently
                there are opportunities in the greater St. Paul area and in
                Hastings, MN. The calendar is updated regularly so check in
                prior to joining! If those dates won't work or you don't want to
                join in person send us an email(<v-btn
                  x-small
                  outlined
                  elevation="0"
                  :to="appBarLinks[4].to"
                  :href="appBarLinks[4].href"
                  @click="onClick($event, appBarLinks[4])"
                  >{{ "here."
                  }}<v-icon right>{{ appBarLinks[4].icon }}</v-icon></v-btn
                >) and we'd happily converse that
                way, over the phone, or schedule a separate time to meet up!
              </p>
            </div>
          </v-row>
        </base-card>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HomeAboutUs",

   computed: {
    ...mapGetters(["appBarLinks"]),
  },



  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      if (this.$route.name != "home") {
        this.$router.push({ name: "home" });
      } else {
        this.$vuetify.goTo(item.href, { duration: 500, easing: "linear" });
      }
    },
  },
};
</script>
