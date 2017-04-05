<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="/" class="navbar-brand">Craig Swift Dental</router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="dropdown split-dropdown">
                        <router-link to="/faq" class="no-dropdown">FAQ</router-link><a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/faq/root-canal-therapy">What is root canal therapy and when is it needed?</router-link></li>
                            <li><router-link to="/faq/cracked-tooth">What are the options for a tooth that is cracked?</router-link></li>
                            <li><router-link to="/faq/periodontal-disease">What is periodontal disease and how is it treated?</router-link></li>
                            <li><router-link to="/faq/floss">Why do i need to floss or use interdental brushes?</router-link></li>
                            <li><router-link to="/faq/wisdom-teeth">Does everyone need their wisdom teeth removed?</router-link></li>
                            <li><router-link to="/faq/fillings">What are the differences between white fillings and silver fillings?</router-link></li>
                            <li><router-link to="/faq/how-often-should-i-visit-the-dentist">How often should I visit the dentist?</router-link></li>
                        </ul>
                    </li>
                </ul>

                <ul class="nav navbar-nav">
                    <li class="dropdown split-dropdown">
                        <router-link to="/the-best-technology" class="no-dropdown">The Best Technology</router-link><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/the-best-technology/operating-microscope">Operating Microscope</router-link></li>
                            <li><router-link to="/the-best-technology/intraoral-camera">Intraoral Camera</router-link></li>
                            <li><router-link to="/the-best-technology/digital-opg-and-cone-beam-ct">Digital OPG & Cone Beam CT</router-link></li>
                            <li><router-link to="/the-best-technology/digital-intra-oral-x-rays">Digital Intra-oral X-rays</router-link></li>
                            <li><router-link to="/the-best-technology/ozone">Ozone</router-link></li>
                            <li><router-link to="/the-best-technology/laser">Laser</router-link></li>
                            <li><router-link to="/the-best-technology/air-abrasion">Air Abrasion</router-link></li>
                            <li><router-link to="/the-best-technology/sterilization-and-infection-control">Sterilization & Infection Control</router-link></li>
                            <li><router-link to="/the-best-technology/duwls">DUWLs</router-link></li>
                        </ul>
                    </li>
                </ul>

                <ul class="nav navbar-nav">
                    <li class="dropdown split-dropdown">
                        <router-link to="/how-can-we-help-you" class="no-dropdown">How Can We Help You</router-link><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/how-can-we-help-you/preventative">Preventative</router-link></li>
                            <li><router-link to="/how-can-we-help-you/restorative">Restorative</router-link></li>
                            <li><router-link to="/how-can-we-help-you/cosmetic">Cosmetic</router-link></li>
                            <li><router-link to="/how-can-we-help-you/endodontics">Endodontics</router-link></li>
                            <li><router-link to="/how-can-we-help-you/periodontics">Periodontics</router-link></li>
                            <li><router-link to="/how-can-we-help-you/implants">Implants</router-link></li>
                            <li><router-link to="/how-can-we-help-you/dentures">Dentures</router-link></li>
                            <li><router-link to="/how-can-we-help-you/mouthguards">Mouthguards</router-link></li>
                            <li><router-link to="/how-can-we-help-you/spleep-appliances">Sleep Appliances</router-link></li>
                            <li><router-link to="/how-can-we-help-you/splints">Splints</router-link></li>
                            <li><router-link to="/how-can-we-help-you/all-general-dentistry">All General Dentistry</router-link></li>
                            <li><router-link to="/how-can-we-help-you/your-general-overall-health">Your General/Overall Health</router-link></li>
                        </ul>
                    </li>
                </ul>

                <ul class="nav navbar-nav">
                    <li class="dropdown split-dropdown">
                        <router-link to="/tips-demos-explanations" class="no-dropdown">Tips, Demos & Explanations</router-link><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/tips/how-to-brush">How to brush</router-link></li>
                            <li><router-link to="/tips/how-to-clean-in-between-your-teeth">How to clean in between your teeth</router-link></li>
                        </ul>
                    </li>
                </ul>


                <!--Navbar-right-->
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/call-email-us">Call/Email Us</router-link></li>
                    <li><router-link to="/get-to-know-us">Get To Know Us</router-link></li>
                    <li><router-link to="/you-are-the-boss">You're The Boss</router-link></li>

                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
//    require('bootstrap');

    module.exports = {
        data: function () {
            return {

            };
        },
        methods: {

        }
    };

</script>

