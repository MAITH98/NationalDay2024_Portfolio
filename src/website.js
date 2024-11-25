import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Container,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";

// Navigation bar with Hamburger Menu
const NavBar = ({ language, onLanguageChange }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#231f20" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
          {language === "en"
            ? "Oman National Day 2024"
            : "اليوم الوطني عمان 2024"}
        </Typography>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          color="inherit"
          onClick={() => toggleDrawer(true)}
          sx={{ display: { xs: "block", sm: "none" } }} // Show only on small screens
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Navigation (Visible when screen size is medium or larger) */}
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button color="inherit" href="#home">
            {language === "en" ? "Home" : "الرئيسية"}
          </Button>
          <Button color="inherit" href="#history">
            {language === "en" ? "History" : "تاريخ"}
          </Button>
          <Button color="inherit" href="#news">
            {language === "en" ? "Key News" : "أهم الأخبار"}
          </Button>
          <Button color="inherit" href="#vision-2040">
            {language === "en" ? "Vision 2040" : "رؤية 2040"}
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer (Side Navigation for small screens) */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "none" }, // Show only on small screens
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2, color: "#231f20" }}>
            {language === "en"
              ? "Oman National Day 2024"
              : "اليوم الوطني عمان 2024"}
          </Typography>
          <Button
            fullWidth
            color="inherit"
            href="#home"
            onClick={() => toggleDrawer(false)}
            sx={{ color: "#231f20" }}
          >
            {language === "en" ? "Home" : "الرئيسية"}
          </Button>
          <Button
            fullWidth
            color="inherit"
            href="#history"
            onClick={() => toggleDrawer(false)}
            sx={{ color: "#231f20" }}
          >
            {language === "en" ? "History" : "تاريخ"}
          </Button>
          <Button
            fullWidth
            color="inherit"
            href="#news"
            onClick={() => toggleDrawer(false)}
            sx={{ color: "#231f20" }}
          >
            {language === "en" ? "Key News" : "أهم الأخبار"}
          </Button>
          <Button
            fullWidth
            color="inherit"
            href="#vision-2040"
            onClick={() => toggleDrawer(false)}
            sx={{ color: "#231f20" }}
          >
            {language === "en" ? "Vision 2040" : "رؤية 2040"}
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

// New Sections

// Key News Section
const KeyNews = ({ language }) => {
  return (
    <Box
      id="news"
      sx={{
        backgroundColor: "#e7dfd8",
        padding: 4,
        textAlign: "center",
        maxWidth: "1200px", // Restrict max width
        margin: "0 auto", // Center horizontally within the parent
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#231f20",
          marginBottom: 4,
        }}
      >
        {language === "en"
          ? "Key News in Oman 2024"
          : "أهم الأخبار في عمان 2024"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          paddingBottom: 2,
          justifyContent: "center", // Center the items
          gap: 2, // Add spacing between cards
        }}
      >
        {/* News Card 1 */}
        <Box
          sx={{
            minWidth: 250,
            boxSizing: "border-box",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <a
            href="https://www.muscatdaily.com/2024/11/16/oman-awards-ro278m-worth-of-road-projects/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5J8XYu9YjVfziUCV3Igcq-GCH7objzd3Dfw&s"
              alt="Oman Infrastructure Growth"
              style={{
                width: "100%",
                height: "60%",
                display: "block",
              }}
            />
            <Typography variant="body2" sx={{ color: "#231f20", padding: 2 }}>
              {language === "en"
                ? "Oman's infrastructure growth: Major road projects like the Adam-Thumrait expressway are set to transform logistics, tourism, and economic development."
                : "نمو البنية التحتية في عمان: من المقرر أن تحول المشاريع الكبرى مثل طريق أدم-ثمريت السريع اللوجستيات والسياحة والتنمية الاقتصادية."}
            </Typography>
          </a>
        </Box>

        {/* News Card 2 */}
        <Box
          sx={{
            minWidth: 250,
            boxSizing: "border-box",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <a
            href="https://www.thearabianstories.com/2024/11/16/omans-north-al-batinah-sees-183-rise-in-foreign-investment-records/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://www.thearabianstories.com/wp-content/uploads/2024/11/websize-53.png"
              alt="Oman Foreign Investment"
              style={{
                width: "100%",
                height: "60%",
                display: "block",
              }}
            />
            <Typography variant="body2" sx={{ color: "#231f20", padding: 2 }}>
              {language === "en"
                ? "Surge in foreign investment: North Al Batinah region sees a 183% increase in foreign investments in 2024, reflecting growing confidence in Oman's economic policies."
                : "زيادة في الاستثمارات الأجنبية: شهدت منطقة شمال الباطنة زيادة بنسبة 183% في الاستثمارات الأجنبية في 2024، مما يعكس الثقة المتزايدة في السياسات الاقتصادية لعمان."}
            </Typography>
          </a>
        </Box>

        {/* News Card 3 */}
        <Box
          sx={{
            minWidth: 250,
            boxSizing: "border-box",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <a
            href="https://www.thearabianstories.com/2024/10/02/oman-gears-up-for-cop29-with-focus-on-climate-action-and-sustainability/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://shabiba.eu-central-1.linodeobjects.com/2024/10/1727872960-1727872959-ausxf3pq71p9-700x400.jpg"
              alt="Oman Green Initiatives COP29"
              style={{
                width: "100%",
                height: "60%",
                display: "block",
              }}
            />
            <Typography variant="body2" sx={{ color: "#231f20", padding: 2 }}>
              {language === "en"
                ? "Green initiatives at COP29: Oman showcases its commitment to sustainability and environmental leadership in the global fight against climate change."
                : "المبادرات الخضراء في COP29: عرضت عمان التزامها بالاستدامة والقيادة البيئية في المعركة العالمية ضد تغير المناخ."}
            </Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

// Oman Vision 2040 Progress Section
const Vision2040Progress = ({ language }) => {
  return (
    <Box
      id="vision-2040"
      sx={{
        backgroundColor: "#e7dfd8",
        padding: 4,
        textAlign: "center",
        maxWidth: "1200px", // Restrict max width
        margin: "0 auto", // Center horizontally within the parent
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#231f20",
          marginBottom: 4,
        }}
      >
        {language === "en"
          ? "Oman Vision 2040 Progress"
          : "تقدم رؤية عمان 2040"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          paddingBottom: 2,
          justifyContent: "center", // Ensures items align properly
          gap: 2, // Adds space between cards
        }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            minWidth: 250,
            boxSizing: "border-box",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <a
            href="https://www.omanobserver.om/article/1148655/oman/imf-praises-oman-says-vision-2040-key-to-growth"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://cdn4.premiumread.com/?url=https://www.omanobserver.om/omanobserver/uploads/images/2024/01/23/2558996.jpg&W=840&q=90&f=jpg"
              alt="Oman Infrastructure Growth"
              style={{
                width: "100%",
                height: "60%",
                display: "block",
              }}
            />
            <Typography variant="body2" sx={{ color: "#231f20", padding: 2 }}>
              {language === "en"
                ? "Economic diversification: A 10.5% increase in foreign investment in 2023 reflects Oman's efforts under Vision 2040 to create a thriving, competitive economy."
                : "التنويع الاقتصادي: يعكس زيادة بنسبة 10.5٪ في الاستثمار الأجنبي في عام 2023 جهود عمان في إطار رؤية 2040 لإنشاء اقتصاد مزدهر ومنافس."}
            </Typography>
          </a>
        </Box>

        {/* Card 2 */}
        <Box
          sx={{
            minWidth: 250,
            boxSizing: "border-box",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <a
            href="https://www.omanobserver.om/article/1162121/oman/governorates/al-dakhiliyah-boulevard-a-game-changer-project"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://cdn4.premiumread.com/?url=https://www.omanobserver.om/omanobserver/uploads/images/2023/06/19/2364464.JPG&w=840&q=90&f=jpg"
              alt="Oman Vision 2040 - Human Capital"
              style={{
                width: "100%",
                height: "60%",
                display: "block",
              }}
            />
            <Typography variant="body2" sx={{ color: "#231f20", padding: 2 }}>
              {language === "en"
                ? "Human capital development: A focus on education and workforce upskilling under Vision 2040 aims to create a knowledge-based society."
                : "تطوير رأس المال البشري: يركز على التعليم ورفع مهارات القوى العاملة في إطار رؤية 2040 لإنشاء مجتمع قائم على المعرفة."}
            </Typography>
          </a>
        </Box>

        {/* Card 3 */}
        <Box
          sx={{
            minWidth: 250,
            boxSizing: "border-box",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <a
            href="https://www.omanobserver.om/article/1138998/oman/oman-vision-2040-accelerating-progress-towards-comprehensive-national-development"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://cdn4.premiumread.com/?url=https://www.omanobserver.om/omanobserver/uploads/images/2023/06/19/2364465.JPG&w=840&q=90&f=jpg"
              alt="Oman Vision 2040 - Digital Economy"
              style={{
                width: "100%",
                height: "60%",
                display: "block",
              }}
            />
            <Typography variant="body2" sx={{ color: "#231f20", padding: 2 }}>
              {language === "en"
                ? "Innovation and digital transformation: Oman strengthens its digital economy, fostering innovation and technology adoption as core Vision 2040 pillars."
                : "الابتكار والتحول الرقمي: تعزز عمان اقتصادها الرقمي من خلال تشجيع الابتكار واعتماد التكنولوجيا كركائز أساسية لرؤية 2040."}
            </Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

// Landing Page (Intro Section)
const LandingPage = ({ language }) => {
  return (
    <Box
      id="home"
      sx={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "600px",
        backgroundColor: "#e7dfd8", // Light cream background
        textAlign: "center",
        padding: 7,
        margin: "0 auto", // Centers horizontally
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'The Seasons', serif",
          fontWeight: "bold",
          color: "#231f20", // Dark text
        }}
      >
        {language === "en"
          ? "Celebrating Oman National Day 2024"
          : "احتفالات اليوم الوطني عمان 2024"}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#231f20", // Dark text for readability
          marginTop: 2,
          fontSize: "1.2rem",
        }}
      >
        {language === "en"
          ? "Join us as we celebrate the spirit of unity, pride, and achievement on this special day."
          : "انضموا إلينا للاحتفال بروح الوحدة والفخر والإنجاز في هذا اليوم الخاص."}
      </Typography>
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/_2Dh0KW2uyU"
        title="Oman Video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      ></iframe>
    </Box>
  );
};

const History = ({ language }) => {
  return (
    <Box
      id="history"
      sx={{
        backgroundColor: "#e7dfd8",
        padding: "40px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center the content horizontally
        justifyContent: "center", // Center the content vertically (if needed)
        maxWidth: "1200px", // Restrict max width
        margin: "0 auto", // Center horizontally within the parent
        textAlign: "center", // General text alignment
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#231f20",
          marginBottom: 4,
          fontFamily: "'Times New Roman', serif",
          fontWeight: "bold",
          fontSize: "2.5rem",
        }}
      >
        {language === "en"
          ? "History of Oman National Day"
          : "تاريخ اليوم الوطني العماني"}
      </Typography>

      {/* Intro Text */}
      <Typography
        variant="body1"
        sx={{
          color: "#231f20",
          fontFamily: "'Georgia', serif",
          lineHeight: 1.6,
          fontSize: "1.2rem",
          marginBottom: 4,
          textAlign: language === "en" ? "left" : "right",
        }}
      >
        {language === "en"
          ? "Oman National Day is celebrated on November 18th every year, commemorating the ascension of Sultan Qaboos bin Said to the throne in 1970. This day marks a significant turning point in Oman’s history, ushering in an era of modernization and growth under the leadership of Sultan Qaboos."
          : "يحتفل العمانيون باليوم الوطني في 18 نوفمبر من كل عام، احتفالاً بذكرى صعود السلطان قابوس بن سعيد إلى العرش في عام 1970. هذا اليوم يمثل نقطة تحول هامة في تاريخ عمان، حيث بدأ عصر الحداثة والنمو تحت قيادة السلطان قابوس."}
      </Typography>

      {/* Section 1: Sultan Qaboos Image and Text */}
      <Grid container spacing={4} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0681/9826/9210/files/HM_Qaboos-500x803_480x480.jpg?v=1693831447"
              alt="Sultan Qaboos"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="body1"
            sx={{
              color: "#231f20",
              fontFamily: "'Georgia', serif",
              lineHeight: 1.6,
              fontSize: "1.2rem",
              textAlign: language === "en" ? "left" : "right",
            }}
          >
            {language === "en"
              ? "Sultan Qaboos bin Said, who ascended the throne on November 18, 1970, transformed Oman from an isolated nation into a modern, thriving state with a strong economy and international presence. His leadership helped shape the country's infrastructure, healthcare, and education systems, making Oman a regional leader in the Arabian Peninsula."
              : "السلطان قابوس بن سعيد، الذي صعد إلى العرش في 18 نوفمبر 1970، حول عمان من دولة معزولة إلى دولة حديثة ومزدهرة ذات اقتصاد قوي وحضور دولي. لقد ساعدت قيادته في تشكيل البنية التحتية للبلاد، والنظام الصحي، والتعليم، مما جعل عمان رائدة في المنطقة."}
          </Typography>
        </Grid>
      </Grid>

      {/* Section 2: Oman Infrastructure Development */}
      <Grid container spacing={4} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="body1"
            sx={{
              color: "#231f20",
              fontFamily: "'Georgia', serif",
              lineHeight: 1.6,
              fontSize: "1.2rem",
              textAlign: language === "en" ? "left" : "right",
            }}
          >
            {language === "en"
              ? "Under Sultan Qaboos's leadership, Oman witnessed massive infrastructure development, including roads, airports, and healthcare facilities, transforming the nation into a regional leader. The focus on modernization was paired with preserving Oman’s rich cultural heritage, making it a perfect blend of tradition and progress."
              : "تحت قيادة السلطان قابوس، شهدت عمان تطوراً هائلًا في البنية التحتية، بما في ذلك الطرق والمطارات والمنشآت الصحية، مما حول البلاد إلى قوة إقليمية. تم دمج التركيز على التحديث مع الحفاظ على التراث الثقافي الغني لعمان، مما جعله مزيجاً مثالياً من التقليد والتقدم."}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <img
              src="https://shabiba.eu-central-1.linodeobjects.com/2020/11/1605425990-1605425990-djkihwfwco20.jpg"
              alt="Oman Infrastructure Development"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Section 3: National Day Celebrations */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <img
              src="https://blog.wego.com/wp-content/uploads/DWXTQP7GHVHO5AKDN3H6W5N7TI-1-scaled.jpg"
              alt="National Day Celebrations"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="body1"
            sx={{
              color: "#231f20",
              fontFamily: "'Georgia', serif",
              lineHeight: 1.6,
              fontSize: "1.2rem",
              textAlign: language === "en" ? "left" : "right",
            }}
          >
            {language === "en"
              ? "Omanis celebrate National Day with pride through military parades, fireworks, and cultural events. The day symbolizes the unity and progress of the nation, reflecting the immense achievements made under the leadership of Sultan Qaboos and his successors."
              : "يحتفل العمانيون باليوم الوطني بفخر من خلال العروض العسكرية والألعاب النارية والفعاليات الثقافية. يعكس هذا اليوم وحدة وتقدم الأمة، ويعكس الإنجازات الهائلة التي تم تحقيقها تحت قيادة السلطان قابوس وخلفائه."}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const WebsitePage = ({}) => {
  const [language, setLanguage] = useState("en");

  // Toggle language between English and Arabic
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#e7dfd8", // Set the same background color as the sections
        minHeight: "100vh", // Ensure it covers the entire viewport height
        width: "100%", // Covers the full width
      }}
    >
      {/* Navigation Bar with Hamburger Menu */}
      <NavBar language={language} onLanguageChange={toggleLanguage} />
      {/* Landing Page */}
      <LandingPage language={language} />
      {/* History Section */}
      <History language={language} />
      {/* Key News Section */}
      <KeyNews language={language} />
      {/* Vision 2040 Progress Section */}
      <Vision2040Progress language={language} />
      {/* Language Button outside of AppBar and Drawer */}
      <Button
        onClick={toggleLanguage}
        sx={{
          position: "fixed",
          top: 80,
          right: 20,
          display: "flex",
          alignItems: "center",
          borderRadius: "10%", // Rounded edges for the button
          padding: "8px 16px",
          fontWeight: "bold",
          fontSize: "1rem",
          textTransform: "none",
          backgroundColor: "#231f20", // Dark button background
          color: "white", // White text and icon
        }}
      >
        <LanguageIcon sx={{ marginRight: 1 }} />
        {language === "en" ? "العربية" : "English"}
      </Button>
    </Box>
  );
};

export default WebsitePage;
