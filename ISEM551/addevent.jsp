<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Datepicker - Default functionality</title>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css" />

<script>
$(function() {
$( "#datepicker" ).datepicker();
});
</script>
</head>
<body>
<h3>Add New Event</h3>
<form>
Event Name:&nbsp<input type="text" name="eventname"><br>
<p> Event Date:&nbsp&nbsp <input type="text" id="datepicker" />
&nbsp&nbsp&nbsp&nbsp&nbsp<input type="checkbox" name="Repeat?" value="event">&nbspRepeat?</p>
Event Type:&nbsp&nbsp&nbsp<select name="events">
  <option value="Other">Other</option>
  <option value="Anniversary">Anniversary</option>
  <option value="Baby Shower">Baby Shower</option>
  <option value="Birthday">Birthday</option>
  <option value="Wedding">Wedding</option>
</select></br></br>
<input type="checkbox" text-align="center" name="vehicle" value="Private">&nbspPrivate
</form>
</body>
</html>