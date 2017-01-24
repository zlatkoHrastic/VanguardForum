using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VanguardForum.Controllers
{
    public class ClanController : Controller
    {
        // GET: Clan
        public ActionResult Index()
        {
            return View();
        }
    }
}