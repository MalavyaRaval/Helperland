#pragma checksum "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4d2822b7c9ffeac5269fe1a1e29fba985164421e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_UserPage_ProviderServiceReq), @"mvc.1.0.view", @"/Views/UserPage/ProviderServiceReq.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\user\source\repos\Help\Views\_ViewImports.cshtml"
using Help;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\user\source\repos\Help\Views\_ViewImports.cshtml"
using Help.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4d2822b7c9ffeac5269fe1a1e29fba985164421e", @"/Views/UserPage/ProviderServiceReq.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a59af65bdeb06c7d0798b43d2bad334871bf11fe", @"/Views/_ViewImports.cshtml")]
    public class Views_UserPage_ProviderServiceReq : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Help.ViewModels.NewServiceReq>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "10", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "20", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "30", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Images/calendar2.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Images/layer-14.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Images/layer-15.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("style", new global::Microsoft.AspNetCore.Html.HtmlString("padding-bottom: 3px;"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"



<div class=""col-lg-7 col-md-10 NewServContainer right-container"">

    <div class=""NewServControls"">
        <div class=""NewServSelect"">
            <label for=""ServArea"" style=""margin-right: 10px;"">Service Area</label>
            <select id=""ServArea"">
                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4d2822b7c9ffeac5269fe1a1e29fba985164421e5869", async() => {
                WriteLiteral("<span>10</span> km");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4d2822b7c9ffeac5269fe1a1e29fba985164421e7056", async() => {
                WriteLiteral("<span>20</span> km");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4d2822b7c9ffeac5269fe1a1e29fba985164421e8243", async() => {
                WriteLiteral("<span>30</span> km");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
            </select>
        </div>
        <div class=""NewServCheckbox"">
            <input type=""checkbox"" id=""PetsCheck"" checked>
            <label for=""PetsCheck""> Include Pets at Home</label>
        </div>
    </div>
    <table class=""NewServTable"" id=""NewServTable"">
        <thead>
            <tr>
                <th class=""col-md-1"" onclick=""sortNSTable(0)"" style=""cursor: pointer;"">
                    Service ID
                </th>
                <th class=""col-md-1"" onclick=""sortNSTable(1)"" style=""cursor: pointer;"">
                    Service Date
                </th>
                <th class=""col-md-2 NScustomer-detail"" style=""cursor: pointer;"">
                    Customer details
                </th>
                <th class=""col-md-1"" onclick=""sortNSTable(2)"" style=""cursor: pointer;"">
                    Payment
                </th>
                <th class=""col-md-1"">
                    Time conflict
                </th>
                <th class=""col-m");
            WriteLiteral("d-1\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n");
#nullable restore
#line 47 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
             if (Model.Count() > 0)
            {
                

#line default
#line hidden
#nullable disable
#nullable restore
#line 49 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                 foreach (var item in Model)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <tr data-value=\"");
#nullable restore
#line 51 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                               Write(item.ServiceRequestId);

#line default
#line hidden
#nullable disable
            WriteLiteral("\">\r\n                        <td data-label=\"Service ID\" class=\"NS-ServId\">\r\n                            <span>");
#nullable restore
#line 53 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                             Write(item.ServiceRequestId);

#line default
#line hidden
#nullable disable
            WriteLiteral("</span>\r\n                        </td>\r\n                        <td data-label=\"Service Date\" class=\"NS-ServDate\">\r\n                            <div class=\"NS-ServDateSpan\">\r\n                                <p>\r\n                                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "4d2822b7c9ffeac5269fe1a1e29fba985164421e12019", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(" <span class=\"service-date\">");
#nullable restore
#line 58 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                                                                                             Write(item.Date);

#line default
#line hidden
#nullable disable
            WriteLiteral("</span>\r\n                                </p>\r\n                                <p>\r\n                                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "4d2822b7c9ffeac5269fe1a1e29fba985164421e13500", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
#nullable restore
#line 61 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                                                                Write(item.StartTime);

#line default
#line hidden
#nullable disable
            WriteLiteral(" - ");
#nullable restore
#line 61 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                                                                                  Write(item.EndTime);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                                </p>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"NS-CustDetail\" data-label=\"Customer details\">\r\n                            <p>\r\n                                ");
#nullable restore
#line 67 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                           Write(item.CustomerName);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                            </p>\r\n                            <p>\r\n                                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "4d2822b7c9ffeac5269fe1a1e29fba985164421e15678", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("&nbsp;<span class=\"detailContent2\">");
#nullable restore
#line 70 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                                                                                                                            Write(item.Address);

#line default
#line hidden
#nullable disable
            WriteLiteral("</span><span class=\"d-none\">");
#nullable restore
#line 70 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                                                                                                                                                                     Write(item.HasPet);

#line default
#line hidden
#nullable disable
            WriteLiteral(" </span>\r\n                            </p>\r\n                        </td>\r\n                        <td data-label=\"Payment\" class=\"NS-Payment\">\r\n                            <span class=\"nsPaySpan\">&euro; ");
#nullable restore
#line 74 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                                                      Write(item.TotalCost);

#line default
#line hidden
#nullable disable
            WriteLiteral(" </span>\r\n                        </td>\r\n                        <td data-label=\"Time conflict\" class=\"NS-TimeConf\">\r\n");
#nullable restore
#line 77 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                              
                                string conflictIdtemp = "Conflict" + @item.ServiceRequestId;
                            

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <a class=\"newReqConflictBtn d-none\"");
            BeginWriteAttribute("id", " id=", 3541, "", 3560, 1);
#nullable restore
#line 80 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
WriteAttributeValue("", 3545, conflictIdtemp, 3545, 15, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Conflict</a>\r\n                        </td>\r\n                        <td class=\"nsTableAcceptbtn\">\r\n                            <button class=\"rounded-pill accept-button\">Accept</button>\r\n                        </td>\r\n                    </tr>\r\n");
#nullable restore
#line 86 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"

                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 87 "C:\Users\user\source\repos\Help\Views\UserPage\ProviderServiceReq.cshtml"
                 
            }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"



        </tbody>
    </table>
</div>








<!--Sp New Service requ details model -->


<button id=""spserviceReqdetailsbtn"" data-bs-toggle=""modal"" data-bs-target=""#detailsModelServiceRequest"" class=""d-none"">details</button>



<div class=""modal"" tabindex=""-1"" id=""detailsModelServiceRequest"">
    <div class=""modal-dialog modal-dialog-centered"">
        <div class=""modal-content text-start"" style=""padding:2% !important"">
            <div class=""modal-header"">
                <h5 class=""modal-title"">Service Details</h5>
                <button type=""button"" class=""btn-close"" data-bs-dismiss=""modal""
                        aria-label=""Close""></button>
            </div>
            <div class=""modal-body float-start row"">
                <div class=""col-md-6 col-sm-12"">
                    <h4 id=""SpServiceReqDatetime"">05/10/2021 <br> 08:00 - 11:30</h4>
                    <p>Duration: <span id=""SpServiceReqDuration""> 3 hrs </span> </p>
                    <hr>
            ");
            WriteLiteral(@"        <p>Service id: <span id=""SpServiceReqId""> 8852</span></p>
                    <div class=""row"">
                        <p class=""col-2"">Extras: </p><br>
                        <div class=""col-8 text-center"" id=""SpServiceReqExtra""></div>
                    </div>

                    <p class=""pt-3 pt-sm-2"">Total Payment: <span id=""SpServiceReqAmount"" class=""price"">8750 &euro;</span> </p>
                    <hr>
                    <p>Customer Name:<span id=""SpServiceReqCustomerName"">Adi</span></p>
                    <p>Service Address: <span id=""SpServiceReqAddress"">Ghuma Ahmedabad 380058</span></p>

                    <hr>

                    <p>Comments: <span id=""SpServiceReqComment""></span></p>



                    <hr>


                    <div id=""detailPopUpNew""><button id=""newServiceReqAccept"" type=""submit"" style=""padding:5px 10px"" class=""rounded-pill btn-success"">Accept</button></div>

                    <div id=""detailPopUpUpComing"">
                        ");
            WriteLiteral(@"<button id=""newServiceReqCompleteBtn"" class=""rounded-pill btn-success"" type=""submit"" style=""padding:5px 10px"">Complete</button>
                        <button id=""newServiceReqCancelBtn"" type=""submit"" style=""padding:5px 10px"" class=""rounded-pill btn-danger"">Cancel</button>
                    </div>




                </div>
                <div class=""col-md-6 col-sm-12"" id=""newServiceReqMap"">
                </div>

            </div>
        </div>
    </div>
</div>
");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Help.ViewModels.NewServiceReq>> Html { get; private set; }
    }
}
#pragma warning restore 1591
