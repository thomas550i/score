<!DOCTYPE html>
<html lang="en"  ng-app="scotchApp">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Live cricket Data</title>
	
  <script src="/js/lib/angular.min.js"></script>
  <script src="/js/lib/angular-route.js"></script>
   <script src="/js/lib/angular-cookies.js"></script>
  
  <script src="/Main.js"></script>
  <script src="/js/util_factory.js"></script>

    <!-- Bootstrap Core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">

    <!-- Plugin CSS -->
    <link rel="stylesheet" href="/vendors/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/vendors/simple-line-icons/css/simple-line-icons.css">
    <link rel="stylesheet" href="/vendors/device-mockups/device-mockups.min.css">

    <!-- Theme CSS -->
    <link href="css/main.css" rel="stylesheet">


</head>

<body  id="page-top" ng-controller="mainController">
<div class="loaderss" data-loadingss id="loadingss"><i class="fa fa-refresh fa-spin fa-fw"></i> Loading...</div>
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#/">Live cricket Data</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a class="page-scroll" href="#/Upcoming">Upcoming Matches</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#/Players">Players</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#/Old">Old Matches</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>


     <div ng-view></div>

    

    

    <footer>
        <div class="container">
            <p>&copy; 2016 score. All Rights Reserved.</p>
            
        </div>
    </footer>

    <!-- jQuery     -->
    <script src="/vendors/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="/vendors/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Theme JavaScript -->
    <script src="/js/angularfunction.js"></script>

</body>

</html>
