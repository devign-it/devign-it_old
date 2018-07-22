<?php $handle = $block['user']['handle'] ?>

<div class="block block--tweet col-1-1 col-md-1-3" data-type="tweet">
  <div class="block-meta">

    <?php
      $date = date('F Y', $block['date']);
      $date_lang = str_replace(array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', '...'), array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december', '...'), $date);
    ?>

    <a class="block-meta-title" href="//twitter.com/<?= $handle ?>">
      <img src="https://twitter.com/<?php echo $handle ?>/profile_image?size=original " alt="" />
      <h4 class="text-color--red"><?= $block['user']['name'] ?></h4>
      <strong><small>@<?= $handle ?></small></strong>
      <h6><?= $date_lang ?></h6>
    </a>

    <p><?= $block['text'] ?></p>
  </div>
</div>
