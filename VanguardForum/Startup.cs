using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VanguardForum.Startup))]
namespace VanguardForum
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
