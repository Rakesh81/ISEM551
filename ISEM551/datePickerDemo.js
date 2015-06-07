 $(function () {

     $("#datepicker").datepicker({

         beforeShowDay: function (date) {
             var today = new Date();
             var today_Date = today.getDate();
             var today_month = today.getMonth() + 1;
             if (date.getDate() == today_Date && (date.getMonth() + 1) == today_month) {
                 return [true, "classAdded"];
             } else {
                 return [true, ""];
             }
         },

         onSelect: function (value, date) {
             var node_remove = document.getElementById("thirdSecondHalf");
             while (node_remove.hasChildNodes()) {
                 node_remove.removeChild(node_remove.lastChild);
             }

             var currentDate = $("#datepicker").datepicker("getDate");
             var currentDay = currentDate.getDate(currentDate);
             var current_month = $("#datepicker").datepicker('getDate').getMonth() + 1; // for month this will give 3+1 = 4 = apr 

             // to create dynamic list
             var data = [{
                     'date': '03',
                     'month': 'Jan',
                     'day': 'today',
                     'event1': 'birthday',
                     'event2': 'hello',
                     'year': '2015'
                 }, {
                     'date': '13',
                     'month': 'Feb',
                     'day': 'today',
                     'event1': 'birthday',
                     'event2': 'hi',
                     'year': '2013'
                 }, {
                     'date': '23',
                     'month': 'Mar',
                     'day': 'today',
                     'event1': 'birthday',
                     'event2': 'hola',
                     'year': '2013'
                 }, {
                     'date': '12',
                     'month': 'Apr',
                     'day': 'today',
                     'event1': 'birthday',
                     'event2': 'hey',
                     'year': '2013'
                 }, {
                     'date': '13',
                     'month': 'May',
                     'day': 'today',
                     'event1': 'birthday',
                     'event2': 'sample',
                     'year': '2015'
                 }
             ];
             for (var i = 0; i < data.length; i++) {
                 $("<div></div>").attr('id', 'list_' + i).appendTo('#thirdSecondHalf').addClass('list_mainDiv').css('top', i + "%");
                 $("<div></div>").attr('id', 'top_' + i).appendTo('#list_' + i).addClass('top_month').text(data[i].day);
                 $("<div></div>").attr('id', 'left_' + i).appendTo('#list_' + i).addClass('date_left').text(data[i].date);
                 $("<div></div>").attr('id', 'first_half_' + i).appendTo('#list_' + i).addClass('month_small').text(data[i].month);
                 $("<div></div>").attr('id', 'second_half_' + i).appendTo('#list_' + i).addClass('year_small').text(data[i].year);
                 $("<div></div>").attr('id', 'eventLine_1_' + i).appendTo('#list_' + i).addClass('event_line1').text(data[i].event1);
                 $("<div></div>").attr('id', 'eventLine_2_' + i).appendTo('#list_' + i).addClass('event_line2').text(data[i].event2);
             }

         },

         showOtherMonths: true,
         selectOtherMonths: true
     });

     $("#datepicker").datepicker("option", "minDate", "-2m");
     $("#datepicker").datepicker("option", "maxDate", "+2y");

     $("#datepicker").datepicker("option", "dayNamesMin", ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
     //	$(".ui-datepicker").css("width", "100%");
     //	$(".ui-datepicker").css("height", "100%");

     //$(".ui-state-default").css("width", "85%");
     //$(".ui-state-default").css("height", "2em");
     //$(".ui-state-default").css("background", "none repeat scroll 0 0 transparent !important");



     $("#dialog-form").dialog({
         autoOpen: false,
         height: 300,
         width: 350,
         //   font-size : 12px,
         modal: true,
         buttons: {
             "Submit": function () {
                 var bValid = true;
                // allFields.removeClass("ui-state-error");

            //     bValid = bValid && checkLength(name, "username", 3, 16);
              //   bValid = bValid && checkLength(email, "email", 6, 80);
                // bValid = bValid && checkLength(password, "password", 5, 16);

//               bValid = bValid && checkRegexp(name, /^[a-z]([0-9a-z_])+$/i, "Username may consist of a-z, 0-9, underscores, begin with a letter.");
                 // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
  //               bValid = bValid && checkRegexp(email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com");
    //             bValid = bValid && checkRegexp(password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9");

                if (bValid) {
                  //   $("#users tbody").append("<tr>" +
                    //     "<td>" + name.val() + "</td>" +
                      //   "<td>" + email.val() + "</td>" +
                        // "<td>" + password.val() + "</td>" +
                       // "</tr>");
                     $(this).dialog("close");
                 }
             },
             Cancel: function () {
                 $(this).dialog("close");
             }
         },
         close: function () {
             //   allFields.val("").removeClass("ui-state-error");
         }
     });




 });

 function inviteFriends() {
     alert('invitation called');
 }

 function inputTextSelected() {
     alert('input stream called');
 }

 function actionReceived() {
     alert('action Received');
 }

 function addEventsCalled() {
     document.location = addevent.jsp;
 }








 $(document).ready(function () {
     $.datepicker.setDefaults($.datepicker.regional[""]);
     //$( "#datepicker" ).datepicker( $.datepicker.regional["fr"] );

     var wishList_Array = ['laptop', 'roku', 'mobile', 'desktop'];
     var wishListLength = wishList_Array.length;
     document.getElementById("addWishList_text").value = "";
     if (wishList_Array.length >= 5) {
         document.getElementById("reachMaxLimit").style.display = "block";
         document.getElementById("addWishList").style.display = "none";

     } else {
         document.getElementById("reachMaxLimit").style.display = "none";
         document.getElementById("addWishList").style.display = "block";

     }

     $("<option></option>").appendTo('#locale').attr('value', 'en').attr('selected', 'selected').text('English');
     $("<option></option>").appendTo('#locale').attr('value', 'ar').text('Arabic (‫(لعربي');
     $("<option></option>").appendTo('#locale').attr('value', 'zh-TW').text('Chinese Traditional (繁體中文)');
     $("<option></option>").appendTo('#locale').attr('value', 'fr').text('French (Français)');
     $("<option></option>").appendTo('#locale').attr('value', 'he').text('Hebrew (‫(עברית');


     for (var i = 0; i < wishList_Array.length; i++) {
         $("<li></li>").attr('id', 'wishList_' + i).appendTo('#wishlist_list').text(wishList_Array[i] + "   ");
     }
     for (var i = 0; i < wishList_Array.length; i++) {
         //		$('#wishList_'+i).append('<span class="closeButton">x</span>');
         $("<span></span>").appendTo('#wishList_' + i).attr('id', 'wishList_Span' + i).addClass('closeButton');
     }

     $("#locale").change(function () {
         $("#datepicker").datepicker("option",
             $.datepicker.regional[$(this).val()]);
     });

     $("#addWishList_Field").delegate(".saveWishList", "click", function (event) {
         var textEntered = document.getElementById("addWishList_text").value;
         if (textEntered == "" || textEntered == null) {

         } else {
             document.getElementById("addWishList_Field").style.display = "none";
             wishList_Array[wishList_Array.length] = textEntered;
             var node_remove = document.getElementById("wishlist_list");
             while (node_remove.hasChildNodes()) {
                 node_remove.removeChild(node_remove.lastChild);
             }
             for (var i = 0; i < wishList_Array.length; i++) {
                 $("<li></li>").attr('id', 'wishList_' + i).appendTo('#wishlist_list').text(wishList_Array[i] + "   ");
             }
             for (var i = 0; i < wishList_Array.length; i++) {
                 //				$('#wishList_'+i).append('<span class="closeButton">x</span>');
                 $("<span></span>").appendTo('#wishList_' + i).attr('id', 'wishList_Span' + i).addClass('closeButton');
             }
         }
         if (wishList_Array.length >= 5) {
             document.getElementById("reachMaxLimit").style.display = "block";
             document.getElementById("addWishList").style.display = "none";
         } else {
             document.getElementById("reachMaxLimit").style.display = "none";
             document.getElementById("addWishList").style.display = "block";
         }
     });

     $("#wishlist_list").delegate(".closeButton", "click", function (event) {
         var toRemoveNode = $(this).parent();
         //var remove_wishItem = confirm('Are you sure you want to remove this wishlist?',['Yes','No']);
         $('<div></div>').appendTo('body')
             .html('<div><h6>Are you sure you want to delete "' + toRemoveNode[0].textContent.trim() + '" from wishlist?</h6></div>')
             .dialog({
             modal: true,
             title: 'Delete message',
             zIndex: 10000,
             autoOpen: true,
             width: 'auto',
             resizable: false,
             buttons: {
                 Yes: function () {
                     $(this).dialog("close");
                     //				$(this).remove();
                     var removedItem = toRemoveNode[0].textContent.trim();
                     for (var i = 0; i < wishList_Array.length; i++) {
                         if (wishList_Array[i] == removedItem) {
                             wishList_Array.splice(i, 1);
                         }
                     }
                     toRemoveNode.remove();
                     if (wishList_Array.length >= 5) {
                         document.getElementById("reachMaxLimit").style.display = "block";
                         document.getElementById("addWishList").style.display = "none";
                     } else {
                         document.getElementById("reachMaxLimit").style.display = "none";
                         document.getElementById("addWishList").style.display = "block";
                     }
                 },
                 No: function () {
                     $(this).dialog("close");
                     $(this).remove();
                 }
             },
             close: function (event, ui) {
                 $(this).remove();
             }
         });


     });

     $("#addEvents_form").on("click", function () {
         $("#dialog-form").dialog("open");
     });
     $("#addWishList").on("click", function (event) {
         document.getElementById("addWishList_text").value = "";
         document.getElementById("addWishList_Field").style.display = "block";
     });
     $("#addWishList_Field").delegate(".closeWishList", "click", function (event) {
         document.getElementById("addWishList_Field").style.display = "none";
     });








 });