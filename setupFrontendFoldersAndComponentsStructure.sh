#!/bin/bash

# Create directories
mkdir -p frontend/src/pages
mkdir -p frontend/src/context

# Component template
component_template='
import React from "react";

const COMPONENT_NAME = () => {
  return (
    <div className="p-4">
      <h1>COMPONENT_NAME</h1>
    </div>
  );
};

export default COMPONENT_NAME;
'

# List of page files
pages=(
  "Home.jsx"
  "resultHistory.jsx"
  "BillHistory.jsx"
  "CourseEvaluation.jsx"
  "PreRegistration.jsx"
  "RegistrationConfirmation.jsx"
  "Profile.jsx"
  "ClassRoutine.jsx"
  "PasswordChange.jsx"
  "CourseDrop.jsx"
  "SemesterDrop.jsx"
  "StudentProgramChange.jsx"
  "StudentAdmitCard.jsx"
  "StudentSpecialExamApply.jsx"
  "StudentExamRoutine.jsx"
  "TeamsUserIdAndPassword.jsx"
)

# Generate each page file with component content
for page in "${pages[@]}"
do
  component_name=$(basename "$page" .jsx)
  file_path="frontend/src/pages/$page"
  echo "${component_template//COMPONENT_NAME/$component_name}" > "$file_path"
done

# Create context file with default context boilerplate
cat <<EOL > frontend/src/context/context.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
EOL

echo "✅ React frontend structure and component templates created."
