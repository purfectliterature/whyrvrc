<template>
  <section class="text-rvrc-purple bg-frame-gray">
    <div class="bg-gradient-to-b from-gray-200 to-frame-gray w-full flex flex-col md:items-center">
      <div class="
        cta-text relative z-10 flex flex-col text-rvrc-purple pt-16 px-4 space-y-8
        sm:px-8 md:px-16
        md:text-center md:items-center
      ">
        <div class="space-y-1">
          <h2>Now it's your turn to</h2>
          <p class="font-extended font-extrabold text-7xl lg:text-8xl">frame your story.</p>
          <p class="text-2xl pt-2">Because at RVRC, you have the potential to be.</p>
        </div>

        <p class="text-lg cta-description">
          The Ridge View Residential College Programme (RVRCP) is a two-year residency, and you will automatically be
          eligible to begin your Year Two Programme upon completion of your Year One Programme. To commence your RVRC
          experience, you need to submit an application through the Joint Residential College Application System, where
          you need to highlight your specific interest in RVRC. Along with it, you will also need to demonstrate your
          motivation aligned with the College's mission through a short essay, and attend an interview, should you are
          shortlisted.<br><br>

          The application period for Academic Year 2021/2022 is open from <b>8 March 2021, 0900hrs</b> to 
          <b>13 April 2021, 1200hrs</b> (one minute after 12 April 2021, 2359hrs).<br><br>

          For further admission inquiries, please drop an email to 
          <a href="mailto:rvrc_admissons@nus.edu.sg" rel="noreferrer noopener" target="_blank">rvrc_admissons@nus.edu.sg</a>.

          <br><br>You can click on the following button to visit the Joint Residential College Application System homepage.
          Scroll down to <i>Useful links</i> for more (very useful) resources with regards to admissions. We hope to see you 
          at the ridge!
        </p>
        
        <a href="https://myaces.nus.edu.sg/prjrca/MasterServlet?actionParam=newstulogin" rel="noreferrer noopener" target="_blank">
          <button>Apply now</button>
        </a>
      </div>
    </div>

    <div class="flex justify-center bg-gradient-to-b from-frame-gray to-frame-gray-end">
      <div class="your-frame bg-your-frame bg-no-repeat bg-center bg-cover w-full" />
    </div>
  </section>
</template>

<script>
export default {
  name: "CtaSection"
}
</script>

<style scoped>
.cta-text {
  max-width: 75rem;
}

.your-frame {
  height: 40rem;
  max-width: 67rem;
}

@media (min-width: 768px) {
  .cta-description {
    max-width: 32rem;
  }
}

@media (min-width: 1024px) {
  .cta-description {
    max-width: 40rem;
  }

  .your-frame {
    height: 45rem;
  }
}
</style>