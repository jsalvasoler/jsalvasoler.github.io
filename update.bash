# Clean the output
rm -f main/*

# Install dependencies
pip3 install -r loconotion/requirements.txt

# Run loconotion
cd loconotion && python3 loconotion --clean ../site.toml --chromedriver /Users/jsalvasoler/Downloads/chromedriver-mac-x64/chromedriver

# Create directory if it does not exist
cd ..
mkdir -p main

# Copy into github pages folder
cp loconotion/dist/main/* main

# Commit and push
git add main
git commit -m "Update main"
git push
