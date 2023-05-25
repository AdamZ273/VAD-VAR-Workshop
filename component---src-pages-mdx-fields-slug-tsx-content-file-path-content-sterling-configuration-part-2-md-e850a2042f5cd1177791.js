"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3087],{7948:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return C}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",img:"img",div:"div",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components);return r.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"b2bi-configuration-part-2"},r.createElement(t.h1,{id:"b2bi-configuration-part-2"},"B2Bi Configuration Part 2"),"\n",r.createElement(t.p,null,"In this chapter, learn how to create a B2Bi partner community, add partners to the community, create a group with these users, create a routing template for the group, and create routing channels."),"\n",r.createElement(t.p,null,"To make this workshop interesting, we will implement a collection of trading partner networks, with each sharing files within their network. To do this, each workshop participant will uniquely name resources by using a prefix of their initials on resources. All of the examples that follow are what Bilbo Baggins would use (bb)."),"\n",r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-partner-community"},r.createElement(t.h2,{id:"create-a-partner-community"},r.createElement(t.a,{href:"#create-a-partner-community"},"Create a partner community")),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Return to the OpenShift web console and click on the route link to the IBM Sterling File Gateway user interface (UI): ",r.createElement(t.strong,null,"sterling-fg-b2bi-asi-internal-route-filegateway"),"."),"\n",r.createElement(t.img,{src:"/1685001737256.63751329555/OSRoutesFileGateway.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"fg_sysadmin")," in the User ID field, ",r.createElement(t.strong,null,"password#")," in the Password field, and then click the ",r.createElement(t.strong,null,"Sign In")," button."),"\n",r.createElement(t.img,{src:"/1685001737188.63531329485/FG_login.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Participants")," pull-down menu item on top menu bar."),"\n",r.createElement(t.img,{src:"/1685001737180.6351329463/FG_Participants.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Communities")," in the ",r.createElement(t.strong,null,"Participants")," menu."),"\n",r.createElement(t.img,{src:"/1685001737176.63481329449/FG_CommunitiesMenu.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"In the ",r.createElement(t.strong,null,"Communities")," pop-up window, click the ",r.createElement(t.strong,null,"add")," link."),"\n",r.createElement(t.img,{src:"/1685001737176.63481329444/FG_CommunitiesAddLink.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Prepend your initials and an underscore to the community name. For example, Bilbo Baggins would enter ",r.createElement(t.strong,null,"bb_sftp_community")," in the ",r.createElement(t.strong,null,"Community Name")," entry field and click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1685001737140.63351329388/BB_FG_CommunitiesName.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Select both the ",r.createElement(t.strong,null,"Partner Initiates Protocol Connections to Mailbox")," and the ",r.createElement(t.strong,null,"Partner Listens for Protocol Connections")," check boxes."),"\n",r.createElement(t.img,{src:"/1685001737180.6351329460/FG_CommunitiesProtocol-1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Select the ",r.createElement(t.strong,null,"SSH/SFTP")," checkbox and click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1685001737180.6351329461/FG_CommunitiesProtocol-2.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Next")," on the ",r.createElement(t.strong,null,"Add Community: Notifications")," form."),"\n",r.createElement(t.img,{src:"/1685001737176.63481329451/FG_CommunitiesNotifications.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Finish")," to confirm the creation of the new community."),"\n",r.createElement(t.img,{src:"/1685001737176.63481329448/FG_CommunitiesFinish.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Return")," on the community confirmation screen."),"\n",r.createElement(t.img,{src:"/1685001737176.63481329445/FG_CommunitiesComplete.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"add-partners-to-the-partner-community"},r.createElement(t.h2,{id:"add-partners-to-the-partner-community"},r.createElement(t.a,{href:"#add-partners-to-the-partner-community"},"Add partners to the partner community")),"\n",r.createElement(t.p,null,"Next, add 2 partners to the newly created ",r.createElement(t.strong,null,"bb_sftp_community"),"."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"edit")," link for the community that has your initials as the prefix (following the same example for Bilbo): ",r.createElement(t.strong,null,"bb_sftp_community")," on the ",r.createElement(t.strong,null,"Communities")," pop-up window."),"\n",r.createElement(t.img,{src:"/1685001737140.63351329387/BB_FG_CommunitiesEdit.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Under ",r.createElement(t.strong,null,"Partner"),", click the ",r.createElement(t.strong,null,"Add")," link."),"\n",r.createElement(t.img,{src:"/1685001737140.63351329386/BB_FG_CommunitiesDetails.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Use your initials followed by a ",r.createElement(t.strong,null,"dash")," as a prefix for the first partner identifier. Enter ",r.createElement(t.strong,null,"bb-partner1")," in the ",r.createElement(t.strong,null,"Partner Name")," field, 10 digits in the ",r.createElement(t.strong,null,"Phone")," field, ",r.createElement(t.strong,null,r.createElement(t.a,{href:"mailto:bb-partner1@localhost.com"},"bb-partner1@localhost.com"))," in the ",r.createElement(t.strong,null,"Email Address")," field, and then click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1685001737140.63351329389/BB_FG_CommunitiesPartner1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"bb-partner1")," in the ",r.createElement(t.strong,null,"User Name")," field, ",r.createElement(t.strong,null,"password")," in the ",r.createElement(t.strong,null,"Password")," field, ",r.createElement(t.strong,null,"password")," in the ",r.createElement(t.strong,null,"Confirm Password")," field, ",r.createElement(t.strong,null,"BB Partner")," in the ",r.createElement(t.strong,null,"Given Name")," field, ",r.createElement(t.strong,null,"One")," in ",r.createElement(t.strong,null,"Surname")," field, and then click ",r.createElement(t.strong,null,"Next"),". Technically, you can use any password you prefer, but it will be needed later in client demo lab."),"\n",r.createElement(t.img,{src:"/1685001737144.63381329393/BB_FG_CommunitiesPartner1Password.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"bb-partner1 is a Producer of Data")," and then click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1685001737144.63381329394/BB_FG_CommunitiesPartner1Role.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the default settings on the ",r.createElement(t.strong,null,"Initiate Connections Settings")," screen and then click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1685001737140.63351329390/BB_FG_CommunitiesPartner1CS.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the default settings on the ",r.createElement(t.strong,null,"PGP Settings")," screen and then click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1685001737144.63381329392/BB_FG_CommunitiesPartner1PGP.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the settings for ",r.createElement(t.strong,null,"bb-partner1")," and click ",r.createElement(t.strong,null,"Finish"),"."),"\n",r.createElement(t.img,{src:"/1685001737144.63381329391/BB_FG_CommunitiesPartner1Confirm.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Return")," on the ",r.createElement(t.strong,null,"Added Partner Successful")," screen."),"\n",r.createElement(t.img,{src:"/1685001737180.6351329458/FG_CommunitiesPartner1Success.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Repeat the Steps 13 through 20 to create a second partner named ",r.createElement(t.strong,null,"partner2")," using the same settings."),"\n",r.createElement(t.img,{src:"/1685001737144.63381329395/BB_FG_CommunitiesPartner2.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Return")," on the ",r.createElement(t.strong,null,"Edit Community: bb_sftp_community")," screen after creating both partners."),"\n",r.createElement(t.img,{src:"/1685001737148.63381329396/BB_FG_CommunitiesReturn.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Close the ",r.createElement(t.strong,null,"Communities")," pop-up window."),"\n",r.createElement(t.img,{src:"/1685001737140.63351329385/BB_FG_CommunitiesClose.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Partners")," under the ",r.createElement(t.strong,null,"Participants")," menu."),"\n",r.createElement(t.img,{src:"/1685001737180.6351329464/FG_ParticipantsPartnersMenu.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Refresh")," button if ",r.createElement(t.strong,null,"partner1")," and ",r.createElement(t.strong,null,"partner2")," do not appear in the ",r.createElement(t.strong,null,"Partners")," table."),"\n",r.createElement(t.img,{src:"/1685001737152.6341329406/BB_FG_PartnersTable.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-group"},r.createElement(t.h2,{id:"create-a-group"},r.createElement(t.a,{href:"#create-a-group"},"Create a group")),"\n",r.createElement(t.p,null,"You will now add a group to make mapping selecting users into a routing channel more simple and scalable"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Groups")," under the ",r.createElement(t.strong,null,"Participants")," menu."),"\n",r.createElement(t.img,{src:"/1685001737148.63381329397/BB_FG_Groups.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Create")," to add a new Group."),"\n",r.createElement(t.img,{src:"/1685001737152.6341329401/BB_FG_GroupsCreate.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter your capital initials followed by a space and then ",r.createElement(t.strong,null,"Partners"),", continuing with the example, it would be ",r.createElement(t.strong,null,"BB Partners"),". Then click on ",r.createElement(t.strong,null,"Save"),"."),"\n",r.createElement(t.img,{src:"/1685001737152.6341329403/BB_FG_GroupsCreateName.png",alt:"image"}),"\n",r.createElement(t.p,null,"Click on ",r.createElement(t.strong,null,"Ok")," to clear the confirmation."),"\n",r.createElement(t.img,{src:"/1685001737152.6341329402/BB_FG_GroupsCreateConf.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"With the Group you added selected, click on ",r.createElement(t.strong,null,"Add Partners..."),"."),"\n",r.createElement(t.img,{src:"/1685001737148.63381329398/BB_FG_GroupsAddPartners.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Select the identities that you added and the group (use Cmd-Click for multiple selections) and then Click ",r.createElement(t.strong,null,"Execute")),"\n",r.createElement(t.img,{src:"/1685001737152.6341329404/BB_FG_GroupsSelectPartners.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the proposed changes for moving the users to the group and Click ",r.createElement(t.strong,null,"Ok")),"\n",r.createElement(t.img,{src:"/1685001737148.63381329400/BB_FG_GroupsConfirmPartners.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Back")," to return to the previous page."),"\n",r.createElement(t.img,{src:"/1685001737148.63381329399/BB_FG_GroupsClosePartners.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Select the group to confirm that the partners are showing as belonging in the group."),"\n",r.createElement(t.img,{src:"/1685001737152.6341329405/BB_FG_GroupsVerify.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-routing-template"},r.createElement(t.h2,{id:"create-a-routing-template"},r.createElement(t.a,{href:"#create-a-routing-template"},"Create a routing template")),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Templates")," under the ",r.createElement(t.strong,null,"Routes")," menu."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329467/FG_RoutesMenuTemplates.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Create")," button at the bottom of the ",r.createElement(t.strong,null,"Routing Channel Templates")," page."),"\n",r.createElement(t.img,{src:"/1685001737188.63531329484/FG_Templates.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"BB Passthrough")," in the ",r.createElement(t.strong,null,"Template Name")," field and then click ",r.createElement(t.strong,null,"Next>>"),"."),"\n",r.createElement(t.img,{src:"/1685001737156.6341329410/BB_FG_TemplateCreateName.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the ",r.createElement(t.strong,null,"Special Characters")," settings and then click ",r.createElement(t.strong,null,"Next>>"),"."),"\n",r.createElement(t.img,{src:"/1685001737160.63431329411/BB_FG_TemplateCreateSpecialChars.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Add only ",r.createElement(t.strong,null,"BB Partners")," to both the ",r.createElement(t.strong,null,"Producer Groups")," and ",r.createElement(t.strong,null,"Consumer Groups")," tables."),"\n",r.createElement(t.img,{src:"/1685001737156.6341329408/BB_FG_TemplateCreateGroups1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Next>>")," after adding ",r.createElement(t.strong,null,"BB Partners")," to both groups."),"\n",r.createElement(t.img,{src:"/1685001737156.6341329409/BB_FG_TemplateCreateGroups2.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the ",r.createElement(t.strong,null,"Provisioning Facts")," page and then click ",r.createElement(t.strong,null,"Next>>"),"."),"\n",r.createElement(t.img,{src:"/1685001737188.63531329482/FG_TemplateCreateProvisioningFacts.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the ",r.createElement(t.strong,null,"File Operation")," page and then click ",r.createElement(t.strong,null,"Next>>"),"."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329474/FG_TemplateCreateFileOperation.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Add")," button on the ",r.createElement(t.strong,null,"Producer")," page."),"\n",r.createElement(t.img,{src:"/1685001737188.63531329478/FG_TemplateCreateProducerAdd.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Producer File Type")," pull-down menu and select ",r.createElement(t.strong,null,"Unknown"),"."),"\n",r.createElement(t.img,{src:"/1685001737188.63531329480/FG_TemplateCreateProducerUnknownMenuSelect.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter .+ in the ",r.createElement(t.strong,null,"File name pattern as regular expression")," field and then click ",r.createElement(t.strong,null,"Save"),"."),"\n",r.createElement(t.img,{src:"/1685001737188.63531329481/FG_TemplateCreateProducerUnknownPattern.png",alt:"image"}),"\n",r.createElement(t.p,null,"Setting the file pattern to the regular expression .+ allows for file names of one or more characters."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Next>>")," on the ",r.createElement(t.strong,null,"Producer")," page."),"\n",r.createElement(t.img,{src:"/1685001737188.63531329479/FG_TemplateCreateProducerNext.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Add")," button on the ",r.createElement(t.strong,null,"Consumer")," page."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329468/FG_TemplateCreateConsumerAdd.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Add")," button on the ",r.createElement(t.strong,null,"New Delivery Channel")," pop-up window."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329469/FG_TemplateCreateConsumerNewDeliveryChannel.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Unknown")," in the ",r.createElement(t.strong,null,"Consumer File Type")," pull-down menu."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329471/FG_TemplateCreateConsumerNewDeliveryChannelFileTypeMenu.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"${ProducerFileName}")," in the ",r.createElement(t.strong,null,"File name format")," field."),"\n",r.createElement(t.div,{"data-rehype-pretty-code-fragment":""},r.createElement(t.pre,{"data-language":"text","data-theme":"default"},r.createElement(t.code,{"data-language":"text","data-theme":"default"},r.createElement(t.span,{className:"line"},r.createElement(t.span,{style:{color:"#8d8d8d"}},"${ProducerFileName}"))))),"\n",r.createElement("br"),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the help information regarding file name formats by hovering over the ",r.createElement(t.strong,null,"File name format")," entry field and then click ",r.createElement(t.strong,null,"Save"),"."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329470/FG_TemplateCreateConsumerNewDeliveryChannelFileTypeFormat.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Save")," on the ",r.createElement(t.strong,null,"New Delivery Channel")," pop-up window."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329472/FG_TemplateCreateConsumerNewDeliveryChannelSave.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Save")," on the ",r.createElement(t.strong,null,"Consumer")," page."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329473/FG_TemplateCreateConsumerSave.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"OK")," on the ",r.createElement(t.strong,null,"Routing Channel Template successfully created.")," pop-up message."),"\n",r.createElement(t.img,{src:"/1685001737188.63531329487/FS_TemplateCreated.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the settings for the new ",r.createElement(t.strong,null,"BB Passthrough")," routing channel template."),"\n",r.createElement(t.img,{src:"/1685001737160.63431329412/BB_FS_TemplateSummary.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-routing-channels"},r.createElement(t.h2,{id:"create-routing-channels"},r.createElement(t.a,{href:"#create-routing-channels"},"Create routing channels")),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Channels")," option under the ",r.createElement(t.strong,null,"Routes")," menu."),"\n",r.createElement(t.img,{src:"/1685001737184.6351329466/FG_RoutesChannelsMenu.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Create")," button at bottom right to create a new ",r.createElement(t.strong,null,"Channel"),"."),"\n",r.createElement(t.img,{src:"/1685001737176.63481329442/FG_ChannelCreate.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Select ",r.createElement(t.strong,null,"BB Passthrough")," for the ",r.createElement(t.strong,null,"Routing Channel Template"),", ",r.createElement(t.strong,null,"bb-partner1")," for the ",r.createElement(t.strong,null,"Producer"),", and ",r.createElement(t.strong,null,"bb-partner2")," for the ",r.createElement(t.strong,null,"Consumer"),", and then click ",r.createElement(t.strong,null,"Save")," to create the new channel."),"\n",r.createElement(t.img,{src:"/1685001737136.63351329382/BB_FG_ChannelCreateP1toP2.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"OK")," on the ",r.createElement(t.strong,null,"Success")," pop-up window."),"\n",r.createElement(t.img,{src:"/1685001737140.63351329383/BB_FG_ChannelCreateP1toP2Success.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Repeat the prior steps to create a channel from bb-partner2 to bb-partner1."),"\n",r.createElement(t.img,{src:"/1685001737140.63351329384/BB_FG_ChannelCreateP2toP1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Sign Out"),"."),"\n",r.createElement(t.img,{src:"/1685001737152.6341329407/BB_FG_SignOut.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(t.p,null,"In the next chapter, the fun begins as the partners start to securely exchange files.")))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},c=n(4184),i=n.n(c),o=n(4690),s=n(1140),u=n(2565),g=n(8531),E=n(3383),p=n(7315);const d=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:a,updated:m}}},children:c}=e,o=(0,r.useRef)(null),{0:d}=(0,r.useState)(""),h=(null===n||n)&&t;return r.createElement(r.Fragment,null,r.createElement(s.Z,{timeToComplete:a,updated:m},t[0].title||l||""),r.createElement(g.Z,{className:p.YS},r.createElement("article",{className:i()(p.Y2,!h&&p.ey),ref:o},r.createElement(u.Z,{components:{h1:()=>null}},c)),h&&r.createElement(E.Z,{itemsList:t,maxDepth:2,currSection:d})))},h=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return r.createElement(o.Z,{pathname:t,title:n||l[0].title||void 0})};function C(e){return r.createElement(d,e,r.createElement(m,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),r=n(1151),a=n(987);const m={table:a.y6,a:a.IW,blockquote:a.R4,SubHeader:a.bU,img:a.fb,code:a.dn,QuizAlert:a.SA};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(r.Zo,{components:{...m,...n}},t)}))},4690:function(e,t,n){var l=n(7294),r=n(1072),a=n(2401);t.Z=e=>{const{title:t,description:n,pathname:m,children:c}=e,{description:i,title:o,origin:s}=(0,a.Z)(),{i18n:{language:u}}=(0,r.$G)(),g={title:t||o,description:n||i,url:""+s+(m||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:u}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,g.title),l.createElement("link",{rel:"canonical",href:g.url}),l.createElement("meta",{name:"description",content:g.description}),l.createElement("meta",{property:"og:title",content:g.title}),l.createElement("meta",{property:"og:url",content:g.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:g.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:g.title}),l.createElement("meta",{name:"twitter:url",content:g.url}),l.createElement("meta",{name:"twitter:description",content:g.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),r=n(7500),a=n(4184),m=n.n(a),c=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:r,items:a}=e;t.splice(t.length,0,{depth:n,title:l,url:r}),a&&a.length>0&&i(a,t,n+1)})),t};var o=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>i(t[0].items||[])),[t]),a=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(r.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:r}=e;return l.createElement("a",{className:m()("TableOfContents-module--link--b292b",a===r.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:r},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return a},ey:function(){return r}});var l="{mdx-fields__slug}-module--article--e3d5a",r="{mdx-fields__slug}-module--noToc--82387",a="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return a}});var l=n(7294);const r=l.createContext({});function a(e){const t=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const m={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||m:a(e),l.createElement(r.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-configuration-part-2-md-e850a2042f5cd1177791.js.map