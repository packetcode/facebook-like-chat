function htmlspecialchars(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
$(document).ready(function() {
  $(".chat_header").click(function() {
    $(".chat_content").slideToggle("slow");
  });

  $(".message_header").click(function() {
    $(".message_content").slideToggle("slow");
    $(".input_box").toggle("slow");
  });

  $(".close").click(function() {
    $(".message_box").hide();
  });

  $(".user").click(function() {
    $(".message_box").show();
    $(".message_content").show();
    $(".input_box").show();
  });

  // Arrow Button
  $(".enter").click(function() {
    var msg = $(".message_input").val();
    if (msg != "") {
      $(".new_messages").append('<p class="my_message">' + htmlspecialchars(msg) + "</p>");
      $(".message_input").val("");
    }
  });
});
