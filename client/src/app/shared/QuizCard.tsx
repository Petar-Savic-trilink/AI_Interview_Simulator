import { AccessibilityNew } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

const QuizCard = () => {
    return (
        <Box sx={{
            height: '100%',
            p: 3,
            border: '2px dashed blue',
            borderRadius: 2,
            backgroundColor: 'rgba(0, 68, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 3, color: 'blue',
            transition: 'all 200ms ease-in-out',
            '&:hover': {
                transform: 'translate(0,-5px)'
            }
        }}>
            <AccessibilityNew fontSize="large" />
            <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6">QuizTitle</Typography>
                    <Typography variant="caption">Diration</Typography>
                </Box>
                <Typography gutterBottom variant="body2" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta vitae modi quibusdam velit at earum quam cumque labore molestiae.</Typography>
                <Typography variant="h6">5/10</Typography>
            </Box>
        </Box>
    )
}
export default QuizCard