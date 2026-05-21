import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Avatar,
  Stack,
  Chip,
  Container
} from "@mui/material";

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Student Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>

          <Grid size={{ xs: 12, md: 4 }}>
            <MetricCard
              title="Assignments"
              value="18"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <MetricCard
              title="Attendance"
              value="96%"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <MetricCard
              title="Average"
              value="91%"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                >
                  Progress
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={78}
                  sx={{
                    height: 14,
                    borderRadius: 3
                  }}
                />

                <Typography
                  sx={{ mt: 2 }}
                >
                  Module completion: 78%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>

                <Stack
                  spacing={2}
                  alignItems="center"
                >
                  <Avatar
                    sx={{
                      width: 90,
                      height: 90
                    }}
                  >
                    JD
                  </Avatar>

                  <Typography
                    variant="h6"
                  >
                    Jane Doe
                  </Typography>

                  <Chip
                    label="Active"
                    color="success"
                  />

                  <Button
                    variant="contained"
                    fullWidth
                  >
                    View Profile
                  </Button>

                </Stack>

              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

function MetricCard({
  title,
  value
}) {
  return (
    <Card>
      <CardContent>
        <Typography
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}