import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
	Avatar,
	CardHeader,
	Container,
	Divider,
	Grid,
	Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Gigs = () => {
	const [gigs, setGigs] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/gigs`)
			.then((res) => res.json())
			.then((data) => setGigs(data));
	}, []);
	return (
		<Container sx={{ minWidth: "100%", py: 3 }}>
			<Typography
				variant='h5'
				gutterBottom
				component='div'
				sx={{ my: 2, textAlign: "left", fontWeight: "bold" }}>
				Latest Gigs
			</Typography>
			<Grid
				container
				spacing={4}
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}>
				{gigs?.map((gig) => (
					<Grid item lg={3} md={4} sm={4} xs={12}>
						<Card sx={{ textAlign: "left", border: "1px solid #e4e5e7" }}>
							<img
								style={{ width: "100%", minHeight: "155px" }}
								component='img'
								alt=''
								src={gig?.gigPhoto1}
							/>
							<CardHeader
								sx={{ pt: 1, pl: 1.5, pb: 0.3 }}
								avatar={
									<Avatar
										sx={{ bgcolor: "red", m: 0 }}
										aria-label='recipe'
										src={gig?.sellerPhoto}
									/>
								}
								titleTypographyProps={{ variant: "body1", fontWeight: "bold" }}
								subheaderTypographyProps={{
									variant: "body2",
								}}
								title='suny1234'
								subheader='New Seller'
							/>
							<CardContent sx={{ py: 1, px: 1.5 }}>
								<Link
									to={`/gigs/${gig?._id}`}
									style={{ textDecoration: "none", color: "black" }}>
									<Typography gutterBottom variant='body' component='div'>
										{gig?.gigTitle}
									</Typography>
								</Link>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Rating
										name='half-rating'
										sx={{ fontSize: 19 }}
										defaultValue={4.5}
										readOnly
									/>
									<Box sx={{ ml: 0.5 }}>
										<Typography
											variant='body'
											sx={{ fontWeight: "bold", color: "#FCC84F" }}>
											5
										</Typography>
									</Box>
									<Box sx={{ ml: 0.5 }}>
										<Typography
											variant='body'
											sx={{
												fontWeight: "bold",
												color: "#C7C8CB",
												fontSize: "20",
											}}>
											(500)
										</Typography>
									</Box>
								</Box>
							</CardContent>
							<Divider />
							<CardActions
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-around",
								}}>
								<Box>
									<FormatAlignJustifyIcon
										sx={{ fontSize: 20, mr: 0.3, color: "#7a7d85" }}
									/>
									<FavoriteIcon sx={{ fontSize: 20, color: "#7a7d85" }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Typography
										variant='caption'
										sx={{ fontWeight: "bold", fontSize: 11, color: "#31887D" }}>
										STARTING AT
									</Typography>
									<Typography
										sx={{
											fontWeight: "bold",
											fontSize: 19,
											ml: 0.3,
											color: "#31887D",
										}}>
										US ${gig?.gigPrice}
									</Typography>
								</Box>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Gigs;