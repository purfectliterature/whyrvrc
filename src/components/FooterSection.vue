<template>
  <footer class="bg-shield-black flex flex-col lg:items-center">
    <div class="footer-container w-full flex flex-col pt-16 pb-8 lg:pb-16 px-4 space-y-8 sm:px-8 md:px-16 lg:items-center">
      <img src="@/assets/images/rvrc-logo-secondary.svg" alt="RVRC Logo" class="w-56 pb-8 lg:self-center">

      <div class="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:justify-between w-full">
        <footer-section-item title="Stay connected">
          <div class="flex flex-row space-x-7">
            <icon-link name="facebook" size="2rem" fill="white" href="https://www.facebook.com/NUSRVRC/" />
            <icon-link name="instagram" size="2rem" fill="white" href="https://instagram.com/rvrc_nus?igshid=1q7n9fj0cxm1g" />
            <icon-link name="tiktok" viewBox="0 0 48 48" size="2rem" fill="white" href="https://vt.tiktok.com/ZSJ8JQgDH/" />
            <icon-link name="reddit-alien-alt" size="2rem" fill="white" href="https://tinyurl.com/RV-Reddit-AMA" />
            <icon-link name="youtube" size="2rem" fill="white" href="https://youtube.com/channel/UC83rIIi0SgYLq-q0vCZpLig?sub_confirmation=1" />
          </div>
        </footer-section-item>

        <footer-section-item title="Useful links">
          <a v-for="link in quickLinks" :key="link.href" :href="link.href" rel="noreferrer noopener" target="_blank" class="
            text-white font-semibold text-lg flex flex-row items-center
          ">
            {{ link.text }}
            <unicon v-if="link.isExternal" name="arrow-up-right" fill="#cecece" width="1.2rem" height="1.2rem" class="ml-1" />
          </a>
        </footer-section-item>

        <footer-section-item title="Locate us">
          <div class="space-y-3">
            <icon-section-item name="map-pin">
              <p class="text-lg text-white">
                Ridge View Residential College<br>
                25 Lower Kent Ridge Road, #02-61<br>
                Singapore 119081
              </p>

              <a href="https://goo.gl/maps/gtQpxFenmVr6DN619" class="text-white font-semibold text-lg flex flex-row items-center" rel="noreferrer noopener" target="_blank">
                Show on Google Maps
                <unicon name="map" fill="#cecece" width="1.2rem" height="1.2rem" class="ml-2" />
                <unicon name="arrow-up-right" fill="#cecece" width="1.2rem" height="1.2rem" class="ml-1" />
              </a>
            </icon-section-item>

            <icon-section-item name="phone">
              <a href="tel:+6566013886" class="text-white font-semibold text-lg flex flex-row items-center" rel="noreferrer noopener" target="_blank">
                +65 6601 3886
              </a>
            </icon-section-item>

            <icon-section-item name="at">
              <a href="mailto:askrvrc@nus.edu.sg" class="text-white font-semibold text-lg flex flex-row items-center" rel="noreferrer noopener" target="_blank">
                askrvrc@nus.edu.sg
              </a>
            </icon-section-item>
          </div>
        </footer-section-item>
      </div>

      <div class="flex flex-col items-start pt-8 lg:items-center">
        <p class="text-white text-lg font-semibold">A flagship residential college of</p>
        <a href="http://nus.edu.sg" rel="noreferrer noopener" target="_blank">
          <img src="@/assets/images/nus-logo-white.png" alt="NUS Logo" class="w-36 mt-4">
        </a>
      </div>

      <div class="credits pt-8 text-white text-md space-y-3 flex flex-col lg:items-center lg:text-center">
        <p>This experience is made possible by the contributions of the following illustrious RVRC students:</p>
        
        <div class="flex flex-col space-y-3 lg:flex-row lg:flex-wrap lg:justify-center lg:space-y-0">
          <div v-for="c in credits" :key="c.name" class="lg:py-4 lg:px-8 lg:text-center">
            <p class="font-extended">{{ c.name }}</p>
            <p class="text-gray-500"><span class="font-semibold">{{ c.position }}</span><br> {{ c.department }}</p>
          </div>
        </div>

        <p>and the immense support from the talented people from RVRC Social Media team, Dance ReVo, the amazing college master, staff, and students.</p>
      </div>
      
      <div class="py-8">
        <p class="text-white text-sm">Copyright &#169; {{ new Date().getFullYear() }} Ridge View Residential College. All rights reserved.</p>
      </div>
      
      <a href="https://phillmontisaweso.me">
        <img src="@/assets/images/phillmont-seal-multilingual.svg" alt="Made with pure love by Phillmont" class="w-52 self-start">
      </a>

    </div>
  </footer>
</template>

<script>
import IconLink from "@/components/IconLink";
import FooterSectionItem from "@/components/FooterSectionItem";
import IconSectionItem from "@/components/IconSectionItem";

class Link {
  constructor(href, text, isExternal) {
    this.href = href;
    this.text = text;
    this.isExternal = isExternal;
  }
}

class Contributor {
  constructor(name, position, department) {
    this.name = name;
    this.position = position;
    this.department = department;
  }
}

export default {
  name: "FooterSection",
  components: { IconLink, FooterSectionItem, IconSectionItem },
  data() {
    return {
      quickLinks: [
        new Link("https://rvrc.nus.edu.sg/admissions/application-process/", "Official RVRCP admission process", true),
        new Link("https://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/application-guide", "On-campus housing application guide", true),
        new Link("https://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/hostel-meal-plan-rates", "Hostel and meal plan rates", true),
        new Link("https://nus.edu.sg/osa/campus-living/residential-options/residential-colleges", "Residential colleges application dates", true),
        new Link("https://rvrc.nus.edu.sg", "Official RVRC website", true),
        new Link("https://uci.nus.edu.sg/ohs/", "NUS Office of Housing Services homepage", true)
      ],
      credits: [
        new Contributor("Phillmont Muktar", "Head", "Brand Identity Design, Software Engineering"),
        new Contributor("Ernest Tock Jia En", "Co-chair", "RVRC Open Day 2021, Content Management"),
        new Contributor("Lim Ting Yu Bernice", "Co-chair", "RVRC Open Day 2021, Content Management"),
        new Contributor("Quek Ee Pin", "Lead Photographer", "Digital Photography, Content Management"),
        new Contributor("Chong Cheng Yang, Lionel", "Lead", "Creative, Content Management")
      ]
    };
  }
}
</script>

<style scoped>
.footer-container {
  max-width: 75rem;
}

.credits {
  max-width: 50rem;
}
</style>