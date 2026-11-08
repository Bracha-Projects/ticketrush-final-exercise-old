// רשימת המתנה
function joinWaitlist(list, email) {
  var clean = String(email).trim().toLowerCase();
  var at = clean.indexOf('@');
  var dot = clean.indexOf('.', at);
  var valid = at > 0 && dot > at + 1 && dot < clean.length - 1;
  if (!valid || list.indexOf(clean) !== -1) {
    return list.slice();
  }
  return list.concat([clean]);
}

module.exports = { joinWaitlist };