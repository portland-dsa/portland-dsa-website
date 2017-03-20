<?php include(locate_template( 'views/shared/header.php' ));

  if(is_home()):
    include(locate_template('views/pages/home.php'));
  endif;
include(locate_template( 'views/shared/footer.php' )); ?>
