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
                <a class="navbar-brand" href="#">Craig Swift Dental</a>
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
                            <li><a href="#">One</a></li>
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

