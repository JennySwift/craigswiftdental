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
                            <li><a href="#">One</a></li>
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
                            <li><a href="#">One</a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="nav navbar-nav">
                    <li class="dropdown split-dropdown">
                        <router-link to="/tips-demos-explanations" class="no-dropdown">Tips, Demos & Explanations</router-link><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">One</a></li>
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

