// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_DISCOUNT = 0.2;   // 20% הנחה לחברות מועדון
const MEMBER_MAX_TICKETS = 6;  // מכסה לחברות מועדון
const STUDENT_DISCOUNT = 0.15; // מבצע סטודנטיות: 15% הנחה

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  if (qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }
  // לא מצטברות: מקבלת רק את ההנחה הגדולה
  let discount = 0;
  if (isMember) discount = Math.max(discount, MEMBER_DISCOUNT);
  if (isStudent) discount = Math.max(discount, STUDENT_DISCOUNT);
  const ticketPrice = TICKET_PRICE * (1 - discount);
  // עמלת השירות אף פעם לא מקבלת הנחה
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_DISCOUNT, MEMBER_MAX_TICKETS, STUDENT_DISCOUNT, maxTickets, calcTotal };
}